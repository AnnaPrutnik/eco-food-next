'use client';

import { useState, useEffect } from 'react';
import * as Slider from '@radix-ui/react-slider';
import s from './price-slider.module.scss';

interface SliderProps {
  price: number[];
  onChangePrice: (values: number[]) => void;
  min: number;
  max: number;
}

export const PriceSlider = ({
  price,
  onChangePrice,
  min,
  max,
}: SliderProps) => {
  const [values, setValues] = useState(price);

  useEffect(() => {
    setValues(price);
  }, [price]);

  const onSliderChange = (values: number[]) => {
    onChangePrice(values);
  };

  return (
    <div className={s.inner}>
      <div className={s.titles}>
        <p>{min}</p>
        <p>{max}</p>
      </div>
      <form>
        <Slider.Root
          className={s.root}
          min={min}
          max={max}
          value={values}
          onValueChange={setValues}
          onValueCommit={onSliderChange}
          step={0.05}
        >
          <Slider.Track className={s.track}>
            <Slider.Range className={s.range} />
          </Slider.Track>
          <Slider.Thumb className={s.thumb} aria-label="min price" />
          <Slider.Thumb className={s.thumb} aria-label="max price" />
        </Slider.Root>
      </form>
    </div>
  );
};
