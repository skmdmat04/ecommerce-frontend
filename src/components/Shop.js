// src/components/Shop.js
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

    useEffect(() => {
        fetchProducts(filters);
    }, [filters]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const data = await searchProducts(searchTerm);
                setProducts(data.data);
            } catch (error) {
                setError('Error fetching search results');
            }
        };

        if (searchTerm) {
            fetchSearchResults();
        } else {
            fetchProducts(filters);
        }
    }, [searchTerm]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Filter filters={filters} setFilters={handleFilterChange} />
            <ProductList products={products} />
        </div>
    );
};

export default Shop;
