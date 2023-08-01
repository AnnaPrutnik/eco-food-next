import s from './filter.module.scss';
import { Price } from './price';
import { Accordion } from '@/components/common/accordion';
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
            <Accordion title="price" defaultOpen={true}>
              <Price min={price.min} max={price.max} />
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  );
};
