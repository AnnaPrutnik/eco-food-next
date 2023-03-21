import { AbstractService } from './abstract.service';
import { IDbCategory } from 'types';
import CategoryModel from 'models/category.model';
import { Model } from 'mongoose';

class Category extends AbstractService<IDbCategory> {
	constructor(model: Model<IDbCategory>) {
		super(model);
	}

	async findOne(title: string) {
		return await this.model.findOne({ title });
	}
}

export const categoryService = new Category(CategoryModel);
