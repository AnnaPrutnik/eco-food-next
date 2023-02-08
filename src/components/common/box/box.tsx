import styled from 'styled-components';
import {
  background,
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  shadow,
  position,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  GridProps,
  TypographyProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system';

interface BoxProps
  extends SpaceProps,
    TypographyProps,
    ColorProps,
    LayoutProps,
    ShadowProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    PositionProps,
    BackgroundProps {}

export const Box = styled.div<BoxProps>(
  typography,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
  shadow,
  background
);
