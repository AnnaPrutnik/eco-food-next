import s from './filter.module.scss';
import { Price } from './price';
import { Brand } from './brand';
import { IFilterData } from '@/types';
import { Form } from './form';
import { Sale } from './sale';
import { Availability } from './availability';
import { Country } from './country';
import { Delivery } from './delivery';

interface FilterProps {
  filterData: IFilterData;
}

export const Filter = async ({ filterData }: FilterProps) => {
  const { price, brands, form, availability, countries, delivery } = filterData;

  return (
    <>
      <button className={s.mobileBtn}>Filter</button>
      <div className={s.menu}>
        <h3 className={s.title}>Filter</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <Price min={price.min} max={price.max} />
          </li>
          <li className={s.item}>
            <Brand data={brands} />
          </li>
          <li className={s.item}>
            <Form data={form} />
          </li>
          <li className={s.item}>
            <Sale />
          </li>
          <li className={s.item}>
            <Availability data={availability} />
          </li>
          <li className={s.item}>
            <Country data={countries} />
          </li>
          <li className={s.item}>
            <Delivery data={delivery} />
          </li>
        </ul>
      </div>
    </>
  );
};
