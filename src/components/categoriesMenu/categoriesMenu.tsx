import { FC } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import {
  Root,
  Trigger,
  Content,
  Indicator,
  Arrow,
  ContentList,
  ContentItem,
  ContentLink,
  Viewport,
} from './categoriesMenu.styled';
import { CategoriesIcon } from 'components/svg';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ICategory } from 'types';
import { fetcher } from 'helpers';

export const CategoriesMenu: FC = () => {
  const { data, isLoading } = useSWR<ICategory[]>('/api/category', fetcher);

  return (
    <Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <Trigger>
            <CategoriesIcon />
            Categories
          </Trigger>
          <Content>
            {!isLoading && (
              <ContentList>
                {data.map((c: ICategory) => (
                  <ContentItem key={c.id}>
                    <Link href={`/${c.url}`} passHref legacyBehavior>
                      <ContentLink>{c.title}</ContentLink>
                    </Link>
                  </ContentItem>
                ))}
              </ContentList>
            )}
          </Content>
        </NavigationMenu.Item>

        <Indicator>
          <Arrow />
        </Indicator>
      </NavigationMenu.List>

      <Viewport />
    </Root>
  );
};
