import CountryModel from 'models/country.model';
import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';
import { Model } from 'mongoose';

class Country extends AbstractService<IDbCatalogItem> {
	constructor(model: Model<IDbCatalogItem>) {
		super(model);
	}
}

export const countryService = new Country(CountryModel);
