'use client';
import s from './filter.module.scss';
import { Price } from './price';
import { Brand } from './brand';
import { Form } from './form';
import { Sale } from './sale';
import { Availability } from './availability';
import { Country } from './country';
import { Delivery } from './delivery';
import { IFilterData } from '@/types';
import { useCustomParams } from '@/hooks';
interface FilterProps {
  filterData: IFilterData;
}

export const Filter = ({ filterData }: FilterProps) => {
  const { price, brands, form, availability, countries, delivery } = filterData;

  const { setNewSearchParams, removePropertyFromParams } = useCustomParams();

  const onUpdateParams = (values: string[], type: string) => {
    if (values.length > 0) {
      setNewSearchParams(type, values.join('_'));
    } else {
      removePropertyFromParams(type);
    }
  };

  return (
    <>
      <button className={s.mobileBtn}>Filter</button>
      <div className={s.menu}>
        <h3 className={s.title}>Filter</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <Price
              min={price.min}
              max={price.max}
              onUpdateParams={onUpdateParams}
            />
          </li>
          <li className={s.item}>
            <Brand data={brands} onUpdateParams={onUpdateParams} />
          </li>
          <li className={s.item}>
            <Form data={form} onUpdateParams={onUpdateParams} />
          </li>
          <li className={s.item}>
            <Sale onUpdateParams={onUpdateParams} />
          </li>
          <li className={s.item}>
            <Availability data={availability} onUpdateParams={onUpdateParams} />
          </li>
          <li className={s.item}>
            <Country data={countries} onUpdateParams={onUpdateParams} />
          </li>
          <li className={s.item}>
            <Delivery data={delivery} onUpdateParams={onUpdateParams} />
          </li>
        </ul>
      </div>
    </>
  );
};
