import { ICollectionItem, IPriceProps, ISelectItem } from 'types';

export interface IFilterValues {
	price: IPriceProps;
	brands: ICollectionItem[];
	form: ICollectionItem[];
	availability: ICollectionItem[];
	country: ICollectionItem[];
	sort: ISelectItem[];
}
