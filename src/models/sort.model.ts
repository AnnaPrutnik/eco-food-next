import { models, model, Schema, Model } from 'mongoose';
import { IDbSortItem } from 'types';

const SortSchema = new Schema<IDbSortItem>(
	{
		value: {
			type: String,
			required: true,
			unique: true,
		},
		label: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, id: true }
);

const sortModel: Model<IDbSortItem> = models.Sort;

const SortModel = sortModel || model<IDbSortItem>('Sort', SortSchema);

export default SortModel;
