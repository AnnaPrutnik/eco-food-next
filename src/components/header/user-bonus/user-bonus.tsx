import { BonusIcon } from "components/svg";
import { Box } from "components";
import { theme } from "theme";

interface IBonus {
  bonus: number;
}

export const UserBonus: React.FC<IBonus> = ({ bonus }) => {
  return (
    <Box
      display={["none", "none", "none", "flex", "flex"]}
      alignItems="center"
      gridGap="8px"
      fontFamily={theme.fonts.lato}
      fontSize={theme.fontSizes.f16}
      fontWeight={theme.fontWeights.body}
      lineHeight={theme.lineHeights.heading}
      color={theme.colors.text}
    >
      <BonusIcon />
      <span>{`Bonus: ${bonus}%`}</span>
    </Box>
  );
};
