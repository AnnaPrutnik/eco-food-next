import { FC } from "react";
import Link from "next/link";
import useSWR from "swr";
import {
  Root,
  Trigger,
  Content,
  Indicator,
  Arrow,
  ContentList,
  ContentInem,
  ContentLink,
  Viewport,
} from "./categoriesMenu.styled";
import { CategoriesIcon } from "components/svg";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

type Category = {
  id: number;
  url: string;
  title: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const CategoriesMenu: FC = () => {
  const { data, isLoading } = useSWR("/api/category", fetcher);

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
                {data.map((c: Category) => (
                  <ContentInem key={c.id}>
                    <Link href={`/${c.url}`} passHref legacyBehavior>
                      <ContentLink>{c.title}</ContentLink>
                    </Link>
                  </ContentInem>
                ))}
              </ContentList>
            )}
          </Content>
        </NavigationMenu.Item>

        <Indicator><Arrow /></Indicator>
      </NavigationMenu.List>

      <Viewport />
    </Root>
  );
};
