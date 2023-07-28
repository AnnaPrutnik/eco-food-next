import s from './header.module.scss';
import { getCategories } from '@/api';
import { SearchForm } from './search-form';

export const Header = async () => {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <SearchForm />
      </div>
    </header>
  );
};
