import axios from 'axios';
import { ICategory } from 'types';

// const ecoFoodInstance = axios.create({
// 	baseURL: process.env.SERVER_URL,
// });

axios.defaults.baseURL = process.env.SERVER_URL;

export const getCategories = async () => {
	const { data: categories } = await axios.get<ICategory[]>(`/categories`);
	return categories;
};
