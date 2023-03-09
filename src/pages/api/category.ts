import type { NextApiRequest, NextApiResponse } from 'next';
// import CategoryModel from 'models/category.model';
import { categoryService } from 'services';
// import categories from 'utils/category.json';
import dbConnect from 'utils/db';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();
	const { method } = req;
	if (method === 'GET') {
		const categories = await categoryService.getAll();
		res.status(200).json(categories);
	}

	if (method === 'POST') {
		const { title, description } = req.body;
		const isExist = await categoryService.findOne(title);
		console.log('isExist', isExist);
		if (isExist) {
			return res.status(400).send('such category is exist');
		}
		if (title && description) {
			const url = title.toLowerCase().split(' ').join('-');
			console.log(url);
			const newCategory = await categoryService.create({
				title,
				description,
				url,
			});
			return res.status(201).json({ data: newCategory });
			// return res.status(201).send('post request');
		}
	}
	// res.status(200).json(categories);
}
