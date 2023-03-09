import { FC } from 'react';
import useSWR from 'swr';
import {
	Box,
	PriceFilter,
	BrandFilter,
	FormFilter,
	AvailabilityFilter,
	SaleFilter,
	CountryFilter,
} from 'components';
import { fetcher } from 'helpers';

import { Divider, Title } from './filter.styled';
import { ICollectionItem, ISelectItem } from 'types';

interface FilterData {
	brands: ICollectionItem[];
	form: ICollectionItem[];
	country: ICollectionItem[];
	availability: ICollectionItem[];
	price: { min: number; max: number };
}

interface FilterProps {
	filterData: FilterData;
}

export const Filter: FC<FilterProps> = ({ filterData }) => {
	// const { data, isLoading } = useSWR('/api/filters', fetcher);
const {availability, brands, country, form, price} = filterData
	// if (isLoading) {
	// 	return <div>isLoading</div>;
	// }

	return (
		<Box width={['100%', '100%', '230px', '250px', '270px']}>
			<form>
				<Title>Filter</Title>
				<PriceFilter data={price} />
				<Divider />
				<BrandFilter data={brands} />
				<Divider />
				<FormFilter data={form} />
				<Divider />
				<SaleFilter />
				<Divider />
				<AvailabilityFilter data={availability} />
				<Divider />
				<CountryFilter data={country} />
			</form>
		</Box>
	);
};
