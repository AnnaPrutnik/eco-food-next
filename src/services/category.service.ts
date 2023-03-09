import { AbstractService } from './abstract.service';
import { IDbCategory } from 'types';
import CategoryModel from 'models/category.model';

class Category extends AbstractService<IDbCategory> {
	constructor(model) {
		super(model);
	}

	async findOne(title: string) {
		return await this.model.findOne({ title });
	}
}

export const categoryService = new Category(CategoryModel);
