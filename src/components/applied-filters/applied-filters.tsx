import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Box, SortByForm } from 'components';
import { useQueryParams } from 'hooks';
import { useRouter } from 'next/router';
import {
  MobileFilter,
  CommonFilter,
  FiltersCount,
  FilterActive,
  ClearAllBtn,
} from './applied-filters.styled';
import { FilterElement } from './filter-element';
import { fetcher } from 'helpers';
import { IOption } from 'types';

export type Value = [string, string[]];
type FilterState = Value[];

export const AppliedFilters = () => {
  const { getPropertiesFormQuery } = useQueryParams();
  const [filterValues, setFilterValues] = useState<FilterState>([]);
  const router = useRouter();
  const { query } = router;
  const { data: sortByData, isLoading } = useSWR<IOption[]>(
    '/api/sort',
    fetcher
  );

  useEffect(() => {
    const properties = getPropertiesFormQuery();
    setFilterValues(properties);
  }, [query]);

  const filterCount = filterValues.length;

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

  const totalProduct = 84;

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <Box display="grid" gridGap={[24, 24, 32]} mb="sp48">
      <MobileFilter>
        <CommonFilter>Filter ({filterCount})</CommonFilter>
        <FiltersCount>Showed {totalProduct} goods</FiltersCount>
      </MobileFilter>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display={['none', 'none', 'block']}>
          <FiltersCount>Showed {totalProduct} goods</FiltersCount>
        </Box>
        <SortByForm options={sortByData} />
      </Box>
      {filterValues.length > 0 && (
        <FilterActive>
          {filterValues.map((value) => (
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
