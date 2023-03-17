import { IDbCategory } from 'types';
import { models, model, Schema, Model } from 'mongoose';

const CategorySchema = new Schema<IDbCategory>(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		url: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, id: true }
);

const categoryModel: Model<IDbCategory> = models.Category;

const CategoryModel =
	categoryModel || model<IDbCategory>('Category', CategorySchema);

export default CategoryModel;
