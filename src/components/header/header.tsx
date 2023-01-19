import React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

import { Box, Input } from 'components/common';
import Search from 'components/svg/search';

export interface FilterProps {
  filter: string;
}

const Header = () => {
  const initialValues: FilterProps = { filter: '' };

  return (
    <Box as='header' height='88px' px='48px' py='22px'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          //ToDo: add searching logic
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Input
            width='270px'
            border='none'
            icon={<Search />}
            placeholder='Name of brand'
            btnType='submit'
            name='filter'
          />
        </Form>
      </Formik>
    </Box>
  );
};

export default Header;
