import { Types } from 'mongoose';

export interface IDbCatalogItem {
	name: string;
}

export interface IDbCategory {
	name: string;
	url: string;
	description: string;
	image: string;
}

export interface IDbSortItem {
	value: string;
	label: string;
}

export interface IObjectId {
	_id: Types.ObjectId;
}
