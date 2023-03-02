import Link from "next/link";
import { Box } from "components";
import {
  UserIcon,
  OrdersIcon,
  FavoritesIcon,
  ViewedIcon,
  WalletIcon,
  BonusIcon,
  FeedbackIcon,
  LetterIcon,
} from "components/svg";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Name,
  FullName,
  Email,
  Arrow,
  List,
  Item,
  StyledLink,
} from "./user.styled";
import { theme } from "theme";

type User = {
  name: string;
  lastName: string;
  eMail: string;
};

interface IUser {
  user: User;
}

export const User: React.FC<IUser> = ({ user }) => {
  return (
    <Root>
      <Trigger>
        <UserIcon />
        <Name>{user.name}</Name>
        <Arrow>&#8249;</Arrow>
      </Trigger>
      <Portal>
        <Content>
          <List>
            <Item>
              <Box
                borderBottom="1px solid"
                borderColor={theme.colors.darkBorder}
                pb="7px"
                mb="7px"
              >
                <Link href="#" passHref legacyBehavior>
                  <StyledLink>
                    <UserIcon />
                    <Box>
                      <FullName>{`${user.name} ${user.lastName}`}</FullName>
                      <Email>{user.eMail}</Email>
                    </Box>
                  </StyledLink>
                </Link>
              </Box>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <OrdersIcon />
                  My orders
                </StyledLink>
              </Link>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <FavoritesIcon />
                  Favorites
                </StyledLink>
              </Link>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <ViewedIcon />
                  Viewed products
                </StyledLink>
              </Link>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <WalletIcon />
                  My wallet
                </StyledLink>
              </Link>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <BonusIcon />
                  My bonuses
                </StyledLink>
              </Link>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <FeedbackIcon />
                  My feedbacks
                </StyledLink>
              </Link>
            </Item>
            <Item>
              <Link href="#" passHref legacyBehavior>
                <StyledLink>
                  <LetterIcon />
                  My correspondence
                </StyledLink>
              </Link>
            </Item>
          </List>
        </Content>
      </Portal>
    </Root>
  );
};
