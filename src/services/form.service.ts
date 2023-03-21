import FormModel from 'models/form.model';
import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';
import { Model } from 'mongoose';

class Form extends AbstractService<IDbCatalogItem> {
	constructor(model: Model<IDbCatalogItem>) {
		super(model);
	}
}

export const formService = new Form(FormModel);
