import React from 'react';
import {
  Box,
  PriceFilter,
  BrandFilter,
  FormFilter,
  AvailabilityFilter,
  SaleFilter,
  CountryFilter,
} from 'components';

import { Divider, Title } from './filter.styled';

export const Filter = () => {
  return (
    <Box width={['100%', '100%', '230px', '250px', '270px']}>
      <form>
        <Title>Filter</Title>
        <PriceFilter />
        <Divider />
        <BrandFilter />
        <Divider />
        <FormFilter />
        <Divider />
        <SaleFilter />
        <Divider />
        <AvailabilityFilter />
        <Divider />
        <CountryFilter />
      </form>
    </Box>
  );
};
