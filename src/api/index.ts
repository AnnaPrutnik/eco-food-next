const baseUrl = process.env.SERVER_URL;
import { ICategory } from '@/types/';

const fetcher = async (url: string, method: string) => {
  //revalidate one time per day
  const res = await fetch(`${baseUrl}${url}`, {
    method: method,
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();
  return data;
};

export const getCategories = (): Promise<ICategory[]> => {
  return fetcher('/categories', 'GET');
};
