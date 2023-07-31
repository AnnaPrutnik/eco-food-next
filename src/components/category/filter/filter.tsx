import s from './filter.module.scss';
import { Price } from './price';
import { Accordion } from '@/components/common/accordion';

export const Filter = () => {
  return (
    <>
      <button className={s.mobileBtn}>Filter</button>
      <div className={s.menu}>
        <h3 className={s.title}>Filter</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <Accordion title="price" defaultOpen={true}>
              inside content
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  );
};
