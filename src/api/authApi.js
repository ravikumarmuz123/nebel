import axios from './axiosInstance';

export const userLogin = (data) => axios.post('/auth/login', data);