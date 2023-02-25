import React from 'react';
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

export const Filter = () => {
  const { data, isLoading } = useSWR('/api/filters', fetcher);

  if (isLoading) {
    return <div>isLoading</div>;
  }
  return (
    <Box width={['100%', '100%', '230px', '250px', '270px']}>
      <form>
        <Title>Filter</Title>
        <PriceFilter data={data.price} />
        <Divider />
        <BrandFilter data={data.brands} />
        <Divider />
        <FormFilter data={data.forms} />
        <Divider />
        <SaleFilter />
        <Divider />
        <AvailabilityFilter data={data.availability} />
        <Divider />
        <CountryFilter data={data.country} />
      </form>
    </Box>
  );
};
