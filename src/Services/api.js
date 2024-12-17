import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7110',
});

export default api;