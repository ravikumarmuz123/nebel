import axios from './axiosInstance';

export const registerUser = (data) => axios.post('/auth/register', data);
export const verifyCode = (data) => axios.post('/auth/verify-code', data);
export const resendCode = (data) => axios.post('/auth/resend-verification-code', data);
export const loginUser = (data) => axios.post('/auth/login', data, { withCredentials: true });
export const getCurrentUser = () => axios.get('/auth/me', { withCredentials: true });
export const logoutUser = () => axios.get('/auth/logout', { withCredentials: true });