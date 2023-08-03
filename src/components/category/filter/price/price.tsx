'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { PriceInput } from './price-input';
import { PriceSlider } from './price-slider';
import { Accordion } from '@/components/common/accordion';
import { QUERY } from '@/constants';
import { useCustomParams } from '@/hooks';
import { checkValueIsNumber } from '@/helpers';
import s from './price.module.scss';

interface PriceProps {
  min: number;
  max: number;
}

export const Price = ({ min, max }: PriceProps) => {
  const searchParams = useSearchParams();
  const { setNewSearchParams } = useCustomParams();
  const defaultPrice: number[] = useMemo(() => [min, max], [min, max]);

  const priceParam = useMemo(() => {
    const param = searchParams.get(QUERY.price);
    if (param) {
      return param
        .split('_')
        .splice(0, 2)
        .map((item, index) => checkValueIsNumber(item, defaultPrice[index]));
    }
    return null;
  }, [defaultPrice, searchParams]);

  const [price, setPrice] = useState<number[]>(() =>
    priceParam ? priceParam : defaultPrice
  );
  const [isPriceQuery, setIsPriceQuery] = useState(true);

  useEffect(() => {
    if (isPriceQuery) {
      setPriceQuery();
      setIsPriceQuery(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPriceQuery]);

  useEffect(() => {
    if (!priceParam) {
      if (price[0] !== min) {
        setPrice((prev) => [min, prev[1]]);
      }
      if (price[1] !== max) {
        setPrice((prev) => [prev[0], max]);
      }
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceParam]);

  const setPriceQuery = () => {
    const priceValue = price.join('_');
    setNewSearchParams(QUERY.price, priceValue);
  };

  const onSetPriceOnQuery = () => {
    setIsPriceQuery(true);
  };

  const onChangePrice = (values: number[]) => {
    setPrice(values);
    onSetPriceOnQuery();
  };

  const onChangeInputPrice = (value: number, type: 'min' | 'max') => {
    const newValue = type === 'max' ? [price[0], value] : [value, price[1]];
    setPrice(newValue);
    onSetPriceOnQuery();
  };

  return (
    <Accordion title="price" defaultOpen={true}>
      <PriceSlider
        max={max}
        min={min}
        price={price}
        onChangePrice={onChangePrice}
      />
      <div className={s.inputs}>
        <PriceInput
          label="from"
          name="min"
          value={price[0]}
          onChangeInput={onChangeInputPrice}
          min={min}
          max={price[1]}
        />
        <PriceInput
          label="to"
          name="max"
          value={price[1]}
          onChangeInput={onChangeInputPrice}
          min={price[0]}
          max={max}
        />
      </div>
    </Accordion>
  );
};
