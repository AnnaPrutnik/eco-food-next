import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Slider, Box, PriceInput, Accordion } from 'components';
import { useQueryParams } from 'hooks';

export const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [priceQuery, setPriceQuery] = useState(false);
  const { query } = useRouter();
  const { updateQueryParams, getArrayValueFromQuery } = useQueryParams();

  useEffect(() => {
    if (priceQuery) {
      setPriceInQuery();
      setPriceQuery(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceQuery]);

  const setPriceInQuery = () => {
    const priceValue = `${minPrice}_${maxPrice}`;
    query.price = priceValue;
    updateQueryParams();
  };

  useEffect(() => {
    if (query.price) {
      const value = getArrayValueFromQuery('price');
      const min = isNaN(Number(value[0])) ? minPrice : Number(value[0]);
      const max = isNaN(Number(value[1])) ? maxPrice : Number(value[1]);

      if (min !== minPrice) {
        setMinPrice(min);
      }

      if (max !== maxPrice) {
        setMaxPrice(max);
      }

      if (isNaN(Number(value[0])) || isNaN(Number(value[1]))) {
        setPriceInQuery();
      }
    } else {
      if (minPrice !== 0) {
        setMinPrice(0);
      }
      if (maxPrice !== 500) {
        setMaxPrice(500);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onChangePrice = (value: number, type: string) => {
    if (type === 'minPrice') {
      setMinPrice(value);
    }

    if (type === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  const onSetPriceOnQuery = () => {
    setPriceQuery(true);
  };

  const onChangePriceInput = (value: number, type: string) => {
    onChangePrice(value, type);
    onSetPriceOnQuery();
  };

  return (
    <Accordion title="price" defaultOpen={true}>
      <Slider
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChangePrice={onChangePrice}
        onSetPrice={onSetPriceOnQuery}
      />
      <Box display="flex" alignItems="center" gridGap="sp16">
        <PriceInput
          value={minPrice}
          name="minPrice"
          label="from"
          onChangeInput={onChangePriceInput}
        />
        <PriceInput
          name="maxPrice"
          label="to"
          value={maxPrice}
          onChangeInput={onChangePriceInput}
        />
      </Box>
    </Accordion>
  );
};
