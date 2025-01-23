import apiClient from './apiClient';

export const getUsers = async () => {
    const users = await apiClient.get('/users');
    console.log(users);
};