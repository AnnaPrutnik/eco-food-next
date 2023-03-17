import axios from 'axios';

axios.defaults.baseURL = process.env.SERVER_URL;

export const getCategories = async () => {
	return await axios('/categories');
};
