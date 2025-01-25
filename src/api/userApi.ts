import { LoginUser } from "../types/login";
import apiClient from "./apiClient";

export const getUsers = async () => {
    const users = await apiClient.get('/User/Users');
    return users;
};

export const login = async (user: LoginUser) => {
    const response = await apiClient.post('/User/Login', user);
    return response.status;
};