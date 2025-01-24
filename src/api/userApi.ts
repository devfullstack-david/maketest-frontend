import apiClient from "./apiClient";

export const getUsers = async () => {
    const users = await apiClient.get('/User/Users');
    return users;
};

export const login = async (user) => {
    const response = await apiClient.post('/User/Login');
    return response.status;
};