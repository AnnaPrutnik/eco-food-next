import { models, model, Schema, Model } from 'mongoose';
import { IDbCatalogItem } from 'types';

const BrandSchema = new Schema<IDbCatalogItem>(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		id: true,
	}
);

const brandModel: Model<IDbCatalogItem> = models.Brand;

const BrandModel = brandModel || model<IDbCatalogItem>('Brand', BrandSchema);

export default BrandModel;
