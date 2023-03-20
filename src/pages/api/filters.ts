import type { NextApiRequest, NextApiResponse } from 'next';
// import { getCategories } from 'services/api';

import {
	brandService,
	formService,
	countryService,
	availabilityService,
	sortService,
} from 'services';
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
		const brands = await brandService.getAll();
		const form = await formService.getAll();
		const country = await countryService.getAll();
		const availability = await availabilityService.getAll();
		const sort = await sortService.getAll();
		const price = {
			min: 10,
			max: 500,
		};

		return res
			.status(200)
			.json({ brands, form, country, availability, sort, price });
	}

	if (method === 'POST') {
		res.send('POST Request');
	}
}
