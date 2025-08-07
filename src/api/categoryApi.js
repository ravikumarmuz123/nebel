import axios from './axiosInstance';

export const getAllCategories = () => axios.get('/categories');
export const getCategoryById = (id) => axios.get(`/categories/${id}`);
export const createCategory = (data) => axios.post('/categories/add', data);
export const updateCategory = (id, data) => axios.put(`/categories/edit/${id}`, data);
export const deleteCategory = (id) => axios.delete(`/categories/delete/${id}`);