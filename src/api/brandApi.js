import axios from './axiosInstance';

export const getAllBrands = () => axios.get('/brands');
export const getBrandById = (id) => axios.get(`/brands/${id}`);
export const createBrand = (data) => axios.post('/brands/add', data);
export const updateBrand = (id, data) => axios.put(`/brands/edit/${id}`, data);
export const deleteBrand = (id) => axios.delete(`/brands/delete/${id}`);