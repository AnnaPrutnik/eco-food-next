import { models, model, Schema, Model } from 'mongoose';
import { IDbCatalogItem } from 'types';

const FormSchema = new Schema<IDbCatalogItem>(
	{
		title: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		id: true,
	}
);

const formModel: Model<IDbCatalogItem> = models.Form;

const FormModel = formModel || model<IDbCatalogItem>('Form', FormSchema);

export default FormModel;
