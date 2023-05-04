import { models, model, Schema, Model } from 'mongoose';
import { IDbCatalogItem } from 'types';

const AvailabilitySchema = new Schema<IDbCatalogItem>(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, id: true }
);

const availabilityModel: Model<IDbCatalogItem> = models.Availability;

const AvailabilityModel =
	availabilityModel ||
	model<IDbCatalogItem>('Availability', AvailabilitySchema);

export default AvailabilityModel;
