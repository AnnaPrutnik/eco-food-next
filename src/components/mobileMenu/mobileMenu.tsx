import { Box } from "components";
import { MenuIcon } from "components/svg";
import { theme } from "theme";

export const MobileMenu: React.FC = () => {
  return (
    <Box
      as="button"
      display={["flex", "flex", "block", "none"]}
      alignItems="center"
      p="7px 0"
      border="none"
      color={theme.colors.text}
      backgroundColor="transparent"
    >
      <MenuIcon />
    </Box>
  );
};
