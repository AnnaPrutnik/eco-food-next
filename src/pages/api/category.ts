import type { NextApiRequest, NextApiResponse } from 'next';
import { getCategories } from 'services';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	//get categories from server
	const categories = await getCategories();
	res.status(200).json(categories);

	// get categories from MongoDB
	// await dbConnect();
	// const { method } = req;
	// if (method === 'GET') {
	// 	const categories = await categoryService.getAll();

	// 	res.status(200).json(categories);
	// }
}
