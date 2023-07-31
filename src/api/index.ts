const baseUrl = process.env.SERVER_URL;
import { ICategory } from '@/types/';

const fetcher = async (url: string, method: string = 'GET') => {
  //revalidate one time per day

  const res = await fetch(`${baseUrl}${url}`, {
    method: method,
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return null;
  }

  const { data } = await res.json();
  return data;
};

export const getCategories = (): Promise<ICategory[]> => {
  return fetcher('/categories');
};

export const getCategoryByUrl = (url: string): Promise<ICategory> => {
  return fetcher(`/categories/${url}`);
};
