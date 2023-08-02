import s from './filter.module.scss';
import { Price } from './price';
import { Brand } from './brand';
import { IFilterData } from '@/types';

interface FilterProps {
  filterData: IFilterData;
}

export const Filter = async ({ filterData }: FilterProps) => {
  const { price } = filterData;

  return (
    <>
      <button className={s.mobileBtn}>Filter</button>
      <div className={s.menu}>
        <h3 className={s.title}>Filter</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <Price min={price.min} max={price.max} />
          </li>
          <li className={s.item}>{/* <Brand /> */}</li>
        </ul>
      </div>
    </>
  );
};
