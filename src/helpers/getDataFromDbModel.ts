import { Model } from 'mongoose';
import { transformMongoResult } from './transformMongoResult';

export async function getDataFromDbModel<T>(model: Model<T>) {
	const result = await model.find({});
	return result.map(doc => {
		return transformMongoResult(doc);
	});
}
