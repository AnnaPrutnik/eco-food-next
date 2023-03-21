import SortModel from 'models/sort.model';
import { AbstractService } from './abstract.service';
import { IDbSortItem } from 'types';
import { Model } from 'mongoose';

class Sort extends AbstractService<IDbSortItem> {
	constructor(model: Model<IDbSortItem>) {
		super(model);
	}
}

export const sortService = new Sort(SortModel);
