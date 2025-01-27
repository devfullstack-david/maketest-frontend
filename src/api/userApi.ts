import { LoginUser } from "../types/login";
import apiClient from "./apiClient";

export const getUsers = async () => {
    const users = await apiClient.get('/User/Users');
    return users;
};

export const login = async (user: LoginUser): Promise<string | number> => {
    try {
        const response = await apiClient.post('/User/Login', user);
        return response.data;  
    } catch (err) {
        return `Ocorreu um erro inesperado, contate nosso time ${err}`;
    }
};