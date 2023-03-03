import { SearchForm } from "components";
import { Root, Trigger, Portal, Content } from "./searchBtn.styled";
import { SearchIcon } from "components/svg";

export const SearchBtn = () => {
  return (
    <Root>
      <Trigger>
        <SearchIcon size={24} />
      </Trigger>
      <Portal>
        <Content>
          <SearchForm />
        </Content>
      </Portal>
    </Root>
  );
};
