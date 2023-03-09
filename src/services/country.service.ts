import CountryModel from 'models/country.model';
import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';

class Country extends AbstractService<IDbCatalogItem> {
	constructor(model) {
		super(model);
	}
}

export const countryService = new Country(CountryModel);
