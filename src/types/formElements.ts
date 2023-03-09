import { IDbCatalogItem, IDbSortItem, IObjectId } from './MongoTypes';

export interface InputProps {
	name: string;
	label?: string;
	value?: string;
	onChangeInput?: (value: string) => void;
}

export interface ICollectionItem extends IDbCatalogItem, IObjectId {}

export interface ISelectItem extends IDbSortItem, IObjectId {}

export interface SelectProps {
	name: string;
	label: string;
	options: ICollectionItem[];
}
