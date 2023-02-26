import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { getAsString, transformValuesFromString } from 'helpers';

export const useQueryParams = () => {
  const router = useRouter();
  const { query } = router;

  const updateQueryParams = () => {
    const { categoryUrl, ...restQuery } = query;
    router.push(
      {
        pathname: `/${query.categoryUrl}`,
        query: { ...restQuery },
      },
      undefined,
      { shallow: true }
    );
  };

  const setArrayAsPropertyToQuery = (property: string, value: string[]) => {
    if (value.length === 0 && query[property]) {
      delete query[property];
    }

    if (value.length > 0) {
      query[property] = value
        .map((item) => item.toLowerCase().split(' ').join('-'))
        .join('_');
    }
  };

  const setValueAsPropertyToQuery = (property: string, value: string) => {
    query[property] = value;
  };

  const deletePropertyFromQuery = (property: string) => {
    if (query[property]) {
      delete query[property];
    }
  };

  const getPropertiesFormQuery = () => {
    const { categoryUrl, sortBy, ...restQueries } = query;
    const queries = Object.entries(restQueries).map((property) => {
      const transform = transformValuesFromString(property[1]);
      if (property[0] === 'price') {
        return [property[0], [transform.join('-')]] as [string, string[]];
      } else {
        return [property[0], transform] as [string, string[]];
      }
    });
    return queries;
  };

  const getStringValueFromQuery = (property: string) => {
    if (!query[property]) {
      return null;
    }

    return getAsString(query[property]);
  };

  const getArrayValueFromQuery = (property: string) => {
    const value = getStringValueFromQuery(property);

    if (!value) {
      return null;
    }
    return value
      .split('_')
      .map((item) => item.toLowerCase().split('-').join(' '));
  };

  return {
    updateQueryParams,
    setArrayAsPropertyToQuery,
    setValueAsPropertyToQuery,
    getPropertiesFormQuery,
    getStringValueFromQuery,
    getArrayValueFromQuery,
    deletePropertyFromQuery,
  };
};
