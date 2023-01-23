import React from "react";
import { Star, SmallStar, Box } from "components";
import { ShortRating, StarsWrap, SmallStarsWrap, Score, SmallScore } from "./rating.styled";
import { theme } from "theme/theme";

interface IRating {
  score: number;
  type: "full" | "short";
}

export const Rating: React.FC<IRating> = ({ type, score }) => {
  const fill = (score * 100) / 5;

  switch (type) {
    case "full":
      return (
        <Box display="flex" alignItems="center">
          <StarsWrap>
            <Box
              width={`${fill}%`}
              height="100%"
              backgroundColor={`${theme.colors.primary}`}
            ></Box>
            <Box
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            >
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </Box>
          </StarsWrap>
          <Score>{`${score}/5`}</Score>
        </Box>
      );

    case "short":
      return (
        <ShortRating>
          <SmallStarsWrap>
            <SmallStar />
          </SmallStarsWrap>
          <SmallScore>{`${score}/5`}</SmallScore>
        </ShortRating>
      );

    default:
      return <Star />;
  }
};
