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

interface FilterProps {
	brands: ICollectionItem[];
	form: ICollectionItem[];
	country: ICollectionItem[];
	availability: ICollectionItem[];
	price: { min: number; max: number };
}

export const Filter: FC<FilterProps> = ({
	availability,
	brands,
	country,
	form,
	price,
}) => {
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
