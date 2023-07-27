'use client';
import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { SearchFormValues } from './search.interface';

export const AutoSubmit = () => {
  const { values, submitForm } = useFormikContext<SearchFormValues>();
  useEffect(() => {
    if (values.filter.length > 3) {
      console.log(values);
      // submitForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  return null;
};
