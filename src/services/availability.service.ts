import AvailabilityModel from 'models/availability.model';
import { AbstractService } from './abstract.service';
import { IDbCatalogItem } from 'types';
import { Model } from 'mongoose';

class Availability extends AbstractService<IDbCatalogItem> {
	constructor(model: Model<IDbCatalogItem>) {
		super(model);
	}
}

export const availabilityService = new Availability(AvailabilityModel);
