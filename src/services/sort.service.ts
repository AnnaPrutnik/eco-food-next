import SortModel from 'models/sort.model';
import { AbstractService } from './abstract.service';
import { IDbSortItem } from 'types';

class Sort extends AbstractService<IDbSortItem> {
	constructor(model) {
		super(model);
	}
}

export const sortService = new Sort(SortModel);
