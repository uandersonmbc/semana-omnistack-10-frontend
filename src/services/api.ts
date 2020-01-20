import axios from "axios";

import { getAccessKey } from "./auth";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

api.interceptors.request.use(async config => {
    const token = getAccessKey();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
