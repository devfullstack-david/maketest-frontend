import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const apiClient = axios.create({
    baseURL: process.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});

/*When implements token authorization in api
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);*/

apiClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response?.status === 401) {
            console.error("Usuário não autorizado. Redirecionando para login.");
        };

        return Promise.reject(error);
    }
);

export default apiClient;