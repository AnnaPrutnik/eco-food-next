import FormModel from 'models/form.model';
import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';

class Form extends AbstractService<IDbCatalogItem> {
	constructor(model) {
		super(model);
	}
}

export const formService = new Form(FormModel);
