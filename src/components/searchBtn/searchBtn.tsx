import { SearchForm } from "components";
import { Root, Trigger, Portal, Content } from "./searchBtn.styled";
import { SearchIcon } from "components/svg";
import { Box } from "components";
import { theme } from "theme";

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
    // <Box
    //   as="button"
    //   display={["flex", "flex", "none", "none"]}
    //   p="7px 0"
    //   border="none"
    //   color={theme.colors.text}
    //   backgroundColor="transparent"
    // >
    //   <SearchIcon size={24} />
    // </Box>
  );
};
