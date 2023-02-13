import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box } from 'components';
import { Text } from './breadcrumbs.styled';

export const Breadcrumbs = () => {
  const router = useRouter();

  const path = useMemo(() => {
    if (router.asPath !== '/') {
      const path = router.asPath
        .split('?')[0]
        .split('/')
        .splice(1)
        .map((item) => {
          const string =
            item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
          return { url: item, title: string.split('-').join(' ') };
        });
      return path;
    }

    return [];
  }, [router]);

  let startPath = '/';

  return (
    <Box display="flex" aria-label="breadcrumb" gridGap="sp4">
      <Link href={startPath}>
        <Text>Homepage</Text>
      </Link>
      {path.length > 0 &&
        path.map((item) => {
          startPath += `${item.url}/`;
          return (
            <React.Fragment key={item.url}>
              <Text>/</Text>
              <Link href={startPath}>
                <Text>{item.title}</Text>
              </Link>
            </React.Fragment>
          );
        })}
    </Box>
  );
};
