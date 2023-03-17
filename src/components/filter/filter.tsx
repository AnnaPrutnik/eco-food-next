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
import { useInitialDataContext } from 'context';

export const Filter = () => {
	const { availability, brands, country, form, price } =
		useInitialDataContext();

	return (
		<Box width='100%'>
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
