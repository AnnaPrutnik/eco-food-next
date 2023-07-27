import s from './header.module.scss';

import { SearchForm } from './search-form';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <SearchForm />
      </div>
    </header>
  );
};
