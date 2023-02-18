import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { FormValues } from './types';

export const FilterSubmiting = () => {
  const [isChanging, setIsChanging] = useState(false);
  const { values, setFieldValue, submitForm } = useFormikContext<FormValues>();
  const [prevState, setPrevState] = useState(() => ({ ...values }));
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (values.changingPrice) {
      console.log('changePrice');
      query.priceFrom = values.priceFrom.toString();
      query.priceTo = values.priceTo.toString();
      setIsChanging(true);
      setFieldValue('changingPrice', false);
    }

    if (values.availability.length !== prevState.availability.length) {
      transformStringToQuery(values.availability, 'availability');
      setIsChanging(true);
    }

    if (values.country.length !== prevState.country.length) {
      transformStringToQuery(values.country, 'country');
      setIsChanging(true);
    }

    if (values.form.length !== prevState.form.length) {
      transformStringToQuery(values.form, 'form');
      setIsChanging(true);
    }

    if (values.brands.length !== prevState.brands.length) {
      transformStringToQuery(values.brands, 'brands');
      setIsChanging(true);
    }

    if (values.sale !== prevState.sale) {
      if (!values.sale && query.sale) {
        delete query.sale;
      }
      if (values.sale) {
        query.sale = 'on-sale';
      }
      setIsChanging(true);
    }
  }, [values]);

  useEffect(() => {
    if (isChanging) {
      const { categoryUrl, ...newQuery } = query;
      router.replace(
        {
          pathname: `/${query.categoryUrl}`,
          query: newQuery,
        },
        undefined,
        { shallow: true }
      );
      setIsChanging(false);
      setPrevState(values);
      submitForm();
    }
  }, [isChanging]);

  const transformStringToQuery = (state: string[], property: string) => {
    if (state.length === 0 && query[property]) {
      delete query[property];
    }
    if (state.length > 0) {
      query[property] = state
        .map((item) => item.toLowerCase().split(' ').join('-'))
        .join('_');
    }
  };

  return null;
};
