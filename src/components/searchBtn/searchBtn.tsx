import { SearchIcon } from "components/svg";
import { Box } from "components";
import { theme } from "theme";

export const SearchBtn = () => {
  return (
    <Box
      as="button"
      display={["flex", "flex", "none", "none"]}
      p="7px 0"
      border="none"
      color={theme.colors.text}
      backgroundColor="transparent"
    >
      <SearchIcon size={24} />
    </Box>
  );
};
