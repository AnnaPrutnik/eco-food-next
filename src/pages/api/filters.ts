import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'utils/db';
import BrandModel from 'models/brand.model';
import FormModel from 'models/form.model';
import CountryModel from 'models/country.model';
import AvailabilityModel from 'models/availability.model';
import SortModel from 'models/sort.model';
import filters from 'utils/filter.json';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();
	if (req.method === 'GET') {
		const brands = await BrandModel.find({});
		const form = await FormModel.find({});
		const country = await CountryModel.find({});
		const availability = await AvailabilityModel.find({});
		const sortBy = await SortModel.find({});
		const price = {
			min: 10,
			max: 500,
		};
		res
			.status(200)
			.json({ brands, form, country, availability, price, sortBy });
	}

	// Code for adding information
	if (req.method === 'POST') {
		const { name } = req.body;

		if (name) {
			const isExist = await FormModel.findOne({ name });
			console.log('isExist', isExist);
			if (isExist) {
				return res.status(400).send('such brand is exist');
			}
			const newBrand = await FormModel.create({
				name,
			});
			return res.status(201).json({ data: newBrand });
		}
	}
	// const response = await fetch(`${process.env.API_HOST}/filters`);
	// const data = await response.json();
}
