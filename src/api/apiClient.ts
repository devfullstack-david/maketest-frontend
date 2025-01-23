import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5141/api',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    timeout: 10000,
    withCredentials: false,
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