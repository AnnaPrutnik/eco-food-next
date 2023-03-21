import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';
import BrandModel from 'models/brand.model';
import { Model } from 'mongoose';

class Brand extends AbstractService<IDbCatalogItem> {
	constructor(model: Model<IDbCatalogItem>) {
		super(model);
	}
}

export const brandService = new Brand(BrandModel);
