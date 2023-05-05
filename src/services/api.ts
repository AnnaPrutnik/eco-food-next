import { ICategory } from 'types';

const BASE_URL = process.env.SERVER_URL;

const customFetch = async (uri: string, options?: RequestInit) => {
	const { data } = await fetch(`${BASE_URL}${uri}`, { ...options }).then(res =>
		res.json()
	);
	return data;
};

export const getCategories = async () => {
	const categories = await customFetch('categories');
	return categories as ICategory[];
};
