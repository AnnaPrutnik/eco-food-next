'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { usePathnameArray } from '@/hooks';
import { normalizeTitle, transformSlugToTitle } from '@/helpers';
import s from './breadcrumbs.module.scss';

// export default usePathnameArray;

export const Breadcrumbs = () => {
  const pathnameArray = usePathnameArray();

  const pathnames = useMemo(() => {
    return pathnameArray.map((item) => {
      if (item === '') {
        return { uri: '/', title: 'Homepage' };
      }
      const title = normalizeTitle(transformSlugToTitle(item));
      return { uri: item, title };
    });
  }, [pathnameArray]);

  let path = '';

  return (
    <div>
      {pathnames.map((pathname, index, array) => {
        path += pathname.uri;

        const title =
          index === array.length - 1 ? pathname.title : `${pathname.title} / `;
        return (
          <Link href={path} key={pathname.title} className={s.link}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};
