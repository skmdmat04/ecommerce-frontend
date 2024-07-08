import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { getProducts, searchProducts } from '../services/api';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ category: '', color: '', size: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async (queryFilters = {}) => {
        console.log("🚀 ~ fetchProducts ~ queryFilters:", queryFilters)
        try {
            const data = await getProducts(queryFilters);
            setProducts(data.data);
        } catch (error) {
            setError('Error fetching products');
        } finally {
            setLoading(false);
        }
    };

    const fetchSearchResults = async () => {
        try {
            const data = await searchProducts(searchTerm);
            setProducts(data.data);
        } catch (error) {
            setError('Error fetching search results');
        }
    };

    useEffect(() => {
        fetchProducts(filters);
    }, [filters]);

    useEffect(() => {

        if (searchTerm) {
            fetchSearchResults();
        } else {
            fetchProducts(filters);
        }
    }, [searchTerm]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };


    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Filter filters={filters} setFilters={handleFilterChange} />
            {loading ? <p className="fetch">Loading products...</p> : error ? <p className="fetch">{error}</p> : <ProductList products={products} />}
            {/* <ProductList products={products} /> */}
        </div>
    );
};

export default Shop;
