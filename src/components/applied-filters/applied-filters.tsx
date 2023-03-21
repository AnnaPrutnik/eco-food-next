import { useState, useEffect, FC, useMemo } from 'react';
import { Box } from 'components';
import { useQueryParams } from 'hooks';
import { useRouter } from 'next/router';
import {
	FiltersCount,
	FilterActive,
	ClearAllBtn,
} from './applied-filters.styled';
import { SortByForm } from './sort-by-form';
import { FilterElement } from './filter-element';
import { MobileFilter } from './mobile-filter';
import { fetcher } from 'helpers';
import useSWR from 'swr';
import { IFilterValues } from 'types';

export type Value = [string, string[]];
type FilterState = Value[];

export const AppliedFilters = () => {
	const { getPropertiesFormQuery } = useQueryParams();
	const [filterValues, setFilterValues] = useState<FilterState>([]);
	const router = useRouter();
	const { query } = router;
	// const { sort } = useInitialDataContext();
	const { data, isLoading } = useSWR<IFilterValues>('/api/filters', fetcher, {
		refreshInterval: 100000,
	});

	useEffect(() => {
		const properties = getPropertiesFormQuery();
		if (properties) {
			setFilterValues(properties);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const filterCount = useMemo(() => filterValues.length, [filterValues]);

	const onClickClearFilter = () => {
		const { categoryUrl, sortBy } = query;
		if (sortBy) {
			router.push(
				{
					pathname: `/${categoryUrl}`,
					query: { sortBy },
				},
				undefined,
				{ shallow: true }
			);
		} else {
			router.push(
				{
					pathname: `/${categoryUrl}`,
				},
				undefined,
				{ shallow: true }
			);
		}
	};

	if (!data) {
		return <>Loading</>;
	}
	const totalProduct = 84;
	const { sort } = data;
	return (
		<Box display='grid' gridGap={[24, 24, 32]} mb={['sp32', 'sp32', 'sp48']}>
			<MobileFilter filterCount={filterCount} totalProduct={totalProduct} />
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Box display={['none', 'none', 'block']}>
					<FiltersCount>Showed {totalProduct} goods</FiltersCount>
				</Box>
				<SortByForm options={sort} />
			</Box>
			{filterValues.length > 0 && (
				<FilterActive>
					{filterValues.map(value => (
						<FilterElement value={value} key={value[0]} />
					))}
					<ClearAllBtn onClick={onClickClearFilter}>
						Clear all filters
					</ClearAllBtn>
				</FilterActive>
			)}
		</Box>
	);
};
