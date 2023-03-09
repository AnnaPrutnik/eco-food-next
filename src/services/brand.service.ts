import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';
import BrandModel from 'models/brand.model';

class Brand extends AbstractService<IDbCatalogItem> {
	constructor(model) {
		super(model);
	}
}

export const brandService = new Brand(BrandModel);
