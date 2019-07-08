import axios from 'axios';
import dotenv from 'dotenv';

const api = axios.create({
    baseURL : 'http://localhost:3232/api',
});

export default api;

