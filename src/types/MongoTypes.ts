import { Types } from 'mongoose';

export interface IDbCatalogItem {
	title: string;
}

export interface IDbCategory {
	title: string;
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
