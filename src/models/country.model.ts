import { models, model, Schema, Model } from 'mongoose';
import { IDbCatalogItem } from 'types';

const CountrySchema = new Schema<IDbCatalogItem>(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, id: true }
);

const countryModel: Model<IDbCatalogItem> = models.Country;

const CountryModel =
	countryModel || model<IDbCatalogItem>('Country', CountrySchema);

export default CountryModel;
