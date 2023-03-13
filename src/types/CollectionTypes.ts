import { IDbCatalogItem, IDbSortItem, IObjectId } from './MongoTypes';

export interface InputProps {
	name: string;
	label?: string;
	value?: string;
	onChangeInput?: (value: string) => void;
}

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
