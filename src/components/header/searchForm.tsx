import React from 'react';
import { Formik, Form } from 'formik';
import { Input } from 'components';

export interface FilterProps {
  filter: string;
}

export const SearchForm = () => {
  const initialValues: FilterProps = { filter: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        //ToDo: add searching logic
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Input type='search' name='filter' />
      </Form>
    </Formik>
  );
};

