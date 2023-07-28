'use client';

import s from './buttons.module.scss';
import { redirect, usePathname } from 'next/navigation';

export const Buttons = () => {
  const pathname = usePathname();

  const onClickHome = () => {
    redirect('/');
  };

  const onClickReport = () => {
    console.log(`user came to url ${pathname} and there is no page here`);
  };

  return (
    <div className={s.buttons}>
      <button className={s.homeBtn} onClick={onClickHome}>
        Go to homepage
      </button>
      <button className={s.reportBtn} onClick={onClickReport}>
        Report a bug
      </button>
    </div>
  );
};
