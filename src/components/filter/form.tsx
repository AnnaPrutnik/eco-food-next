import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { Box, CheckboxGroup, Heading, Input, Select, Slider } from 'components';
import { brands as defaultBrands, country, filterProducts } from './db';
import { ICheckBox } from 'types';
import { StyledForm } from './form.styled';

interface FormTestProps {
  brands?: ICheckBox[];
}

export const FormTest: React.FC<FormTestProps> = () => {
  const [brands, setBrands] = useState(defaultBrands);

  const onChangeFilterBrandInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const normalizeValue = e.target.value.toLowerCase();
    const newBrands = defaultBrands.filter((brand) =>
      brand.name.toLowerCase().includes(normalizeValue)
    );
    setBrands(newBrands);
  };

  return (
    <Box width='30%' ml={4}>
      <Heading text='Form Test' type='product' />
      <Heading text='inputs' type='card' />
      <Formik
        initialValues={{
          firstName: '',
          country: country[0].value,
          filtering: filterProducts[0].value,
          brands: [],
          priceFrom: 0,
          priceTo: 150,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <StyledForm>
          <Input type='checkout' name='firstName' label='First name' />
          <Input type='email' name='sendEmail' />
          <Slider start='priceFrom' end='priceTo' max={500} />
          <Box display='flex' alignItems='center'>
            <Box mr={5} display='flex' alignItems='center'>
              <p style={{ opacity: 0.5, marginRight: '12px' }}>From: </p>
              <Input type='price' name='priceFrom' label='$' />
            </Box>
            <Box display='flex' alignItems='center'>
              <p style={{ opacity: 0.5, marginRight: '12px' }}>To</p>
              <Input type='price' name='priceTo' label='$' />
            </Box>
          </Box>

          <Select
            type='checkout'
            name='country'
            label='Country / Region'
            options={country}
          />
          <Select
            type='filter'
            name='filtering'
            label='Sort by'
            options={filterProducts}
          />

          <div id='checkbox-group'>Brands</div>
          <Input
            name='brandFilter'
            type='filter'
            onChangeInput={onChangeFilterBrandInput}
          />
          <CheckboxGroup name='brands' options={brands} />
          <button type='submit'>Submit</button>
        </StyledForm>
      </Formik>
    </Box>
  );
};
