import { FC } from 'react';
import {
	AvailabilityFilter,
	BrandFilter,
	CountryFilter,
	FormFilter,
	PriceFilter,
	SaleFilter,
} from './filter-items';
import { Box } from 'components';
import { Divider, Title } from './filter.styled';
import { ICollectionItem } from 'types';

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
	const { availability, brands, country, form, price } = filterData;

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
