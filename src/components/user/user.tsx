import { UserIcon } from "components/svg";
import { Button, Name, Arrow } from "./user.styled";

interface IUser {
  name: string;
}

export const User: React.FC<IUser> = ({ name }) => {
  return (
    <Button type="button">
      <UserIcon />
      <Name>{name}</Name>
      <Arrow>&#8249;</Arrow>
    </Button>
  );
};
