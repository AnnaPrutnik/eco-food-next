import { IDbCatalogItem, IDbSortItem, IObjectId } from './MongoTypes';

export type ICollectionItem = IDbCatalogItem & IObjectId;

export type ISelectItem = IDbSortItem & IObjectId;

export interface SelectProps {
	name: string;
	label: string;
	options: ISelectItem[];
}

export interface IPriceProps {
	min: number;
	max: number;
}
