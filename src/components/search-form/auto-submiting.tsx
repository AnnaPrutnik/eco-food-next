import React from 'react';
import { useFormikContext } from 'formik';
import { SearchFormValues } from './types';

export const AutoSubmit = () => {
  const { values, submitForm } = useFormikContext<SearchFormValues>();
  React.useEffect(() => {
    if (values.filter.length > 3) {
      console.log(values);
      //ToDo: add logic for searching
    }
  }, [values, submitForm]);
  return null;
};
