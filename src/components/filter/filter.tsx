import {
	AvailabilityFilter,
	BrandFilter,
	CountryFilter,
	FormFilter,
	PriceFilter,
	SaleFilter,
} from './filter-items';
import useSWR from 'swr';
import { Box } from 'components';
import { fetcher } from 'helpers';
import { Divider, Title } from './filter.styled';
import { IFilterValues } from 'types';

export const Filter = () => {
	const { data, isLoading } = useSWR<IFilterValues>('/api/filters', fetcher, {
		refreshInterval: 100000,
	});

	if (!data) {
		return <div>loading</div>;
	}

	const { availability, brands, country, form, price } = data;
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
