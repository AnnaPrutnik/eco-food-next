import React, { useState, useMemo } from 'react';
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

export const Filter = () => {
  const [brands, setBrands] = useState(defaultBrands);

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
    priceFrom: 0,
    priceTo: 150,
    brands: [],
    form: [],
    sale: false,
    availability: [],
    country: [],
  };
  return (
    <Box width={{ md: '270px' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Title>Filter</Title>
          <Accordion title="price">
            <Slider start="priceFrom" end="priceTo" max={500} />
            <Box display="flex" alignItems="center" gridGap="sp16">
              <PriceInput name="priceFrom" label="from" />
              <PriceInput name="priceTo" label="to" />
            </Box>
          </Accordion>
          <Divider />
          <Accordion title="brand">
            <BrandFilter
              name="brandFilter"
              onChangeInput={onClickBrandSearch}
            />
            <CheckboxGroup options={brands} name="brands" />
          </Accordion>
          <Divider />
          <Accordion title="form">
            <CheckboxGroup options={forms} name="form" />
          </Accordion>
          <Divider />
          <Accordion title="sale">
            <Checkbox name="sale" value="on Sale" />
          </Accordion>
          <Divider />
          <Accordion title="availability">
            <CheckboxGroup options={availability} name="availability" />
          </Accordion>
          <Divider />
          <Accordion title="country">
            <CheckboxGroup options={normalizedCountry} name="country" />
          </Accordion>
        </Form>
      </Formik>
    </Box>
  );
};
