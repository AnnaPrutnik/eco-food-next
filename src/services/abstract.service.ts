import { Model } from 'mongoose';
import { transformMongoResult } from 'helpers';

export class AbstractService<T> {
	model: Model<T>;

	constructor(model) {
		this.model = model;
	}

	async getAll() {
		return await this.model.find({});
	}

	async getById(id: string) {
		return await this.model.findOne({ _id: id });
	}

	async create(body: T) {
		return await this.model.create({ ...body });
	}

	async getSerializedAll() {
		const result = await this.model.find({});
		return result.map(doc => transformMongoResult(doc));
	}
}
