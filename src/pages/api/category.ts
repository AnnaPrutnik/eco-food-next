import type { NextApiRequest, NextApiResponse } from 'next';
// import { getCategories } from 'services/api';

import { categoryService, sortService } from 'services';
import dbConnect from 'utils/db';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	//get categories from server
	// const categories = await getCategories();
	// res.status(200).json(categories);

	//get categories from MongoDB
	await dbConnect();
	const { method } = req;
	if (method === 'GET') {
		const categories = await categoryService.getAll();
		res.status(200).json(categories);
	}

	if (method === 'POST') {
		res.send('POST Request');
		// const { title, description, image } = req.body;
		// const isExist = await categoryService.findOne(title);
		// console.log('isExist', isExist);
		// if (isExist) {
		// 	return res.status(400).send('such category is exist');
		// }
		// if (title && description && image) {
		// 	const url = title.toLowerCase().split(' ').join('-');

		// 	const newCategory = await categoryService.create({
		// 		title,
		// 		description,
		// 		url,
		// 		image,
		// 	});
		// 	return res.status(201).json({ data: newCategory });

		// const { label, value } = req.body;
		// const newData = await sortService.create({ label, value });
		// return res.status(201).json({ data: newData });
	}
}
