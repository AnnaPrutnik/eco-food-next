import AvailabilityModel from 'models/availability.model';
import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';

class Availability extends AbstractService<IDbCatalogItem> {
	constructor(model) {
		super(model);
	}
}

export const availabilityService = new Availability(AvailabilityModel);
