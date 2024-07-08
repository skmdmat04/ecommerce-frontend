import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getProducts = async (filters = {}) => {
    try {
        const response = await axios.get(API_URL, {
            params: filters,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products', error);
        throw error;
    }
};

const searchProducts = async (query) => {
    const response = await axios.get(`${API_URL}/search?query=${query}`);
    return response.data;
};

export { getProducts, searchProducts };
