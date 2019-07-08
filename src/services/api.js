import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:3232/api',
});

export default api;

