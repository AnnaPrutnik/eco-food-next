import React, { useState, useMemo, useEffect } from 'react';
import {
  BrandFilter,
  Box,
  Accordion,
  Slider,
  PriceInput,
  CheckboxGroup,
  Checkbox,
} from 'components';
import { Formik, Form } from 'formik';
import {
  brands as defaultBrands,
  forms,
  availability,
  country,
} from './temp-db';
import { FormValues } from './types';
import { Divider, Title } from './filter.styled';
import { FilterSubmiting } from './filter-submiting';
import { useRouter } from 'next/router';
import { getAsString, transformStringQuery } from 'helpers';

export const Filter = () => {
  const router = useRouter();
  const { query } = router;
  const [brands, setBrands] = useState(defaultBrands);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.isReady && isLoading) {
      setIsLoading(false);

      if (!query.priceFrom) {
        query.priceFrom = '0';
      }

      if (!query.priceTo) {
        query.priceTo = '150';
      }

      const { categoryUrl, ...newQuery } = query;
      router.replace(
        {
          pathname: `/${query.categoryUrl}`,
          query: newQuery,
        },
        undefined,
        { shallow: true }
      );
    }
  }, [isLoading, query, router]);

  const onClickBrandSearch = (value: string) => {
    const normalizeValue = value.toLowerCase();
    const newBrands = defaultBrands.filter((brand) =>
      brand.name.toLowerCase().includes(normalizeValue)
    );
    setBrands(newBrands);
  };

  const normalizedCountry = useMemo(() => {
    return country.map((item, index) => ({ id: index + 1, name: item.label }));
  }, []);

  const initialValues: FormValues = {
    priceFrom: Number(getAsString(query.priceFrom)) || 0,
    priceTo: Number(getAsString(query.priceTo)) || 150,
    changingPrice: false,
    brands: transformStringQuery(query.brands) || [],
    form: transformStringQuery(query.form) || [],
    sale: Boolean(getAsString(query.sale)) || false,
    availability: transformStringQuery(query.availability) || [],
    country: transformStringQuery(query.country) || [],
    changingValue: null,
  };

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <Box width={{ md: '270px' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('submit');
        }}
      >
        <Form>
          <Title>Filter</Title>
          <Accordion title="price">
            <Slider
              start="priceFrom"
              end="priceTo"
              max={500}
              trigger="changingPrice"
            />
            <Box display="flex" alignItems="center" gridGap="sp16">
              <PriceInput
                name="priceFrom"
                label="from"
                trigger="changingPrice"
              />
              <PriceInput name="priceTo" label="to" trigger="changingPrice" />
            </Box>
          </Accordion>
          <Divider />
          <Accordion title="brand">
            <BrandFilter
              name="brandFilter"
              onChangeInput={onClickBrandSearch}
            />
            <CheckboxGroup
              options={brands}
              name="brands"
              trigger="changingValue"
            />
          </Accordion>
          <Divider />
          <Accordion title="form">
            <CheckboxGroup
              options={forms}
              name="form"
              trigger="changingValue"
            />
          </Accordion>
          <Divider />
          <Accordion title="sale">
            <Checkbox name="sale" value="on Sale" trigger="changingValue" />
          </Accordion>
          <Divider />
          <Accordion title="availability">
            <CheckboxGroup
              options={availability}
              name="availability"
              trigger="changingValue"
            />
          </Accordion>
          <Divider />
          <Accordion title="country">
            <CheckboxGroup
              options={normalizedCountry}
              name="country"
              trigger="changingValue"
            />
          </Accordion>
          <FilterSubmiting />
        </Form>
      </Formik>
    </Box>
  );
};
