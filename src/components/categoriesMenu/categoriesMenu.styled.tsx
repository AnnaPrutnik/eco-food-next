import styled, { css, keyframes } from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Typography = css`
  font-family: ${(p) => p.theme.fonts.lato};
  font-size: ${(p) => p.theme.fontSizes.f16};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.heading};

  color: ${(p) => p.theme.colors.text};
`;

export const Root = styled(NavigationMenu.Root)`
  ${Typography}
  position: relative;
`;

export const Trigger = styled(NavigationMenu.Trigger)`
  ${Typography}
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0;

  border: none;

  background-color: transparent;
`;

export const Viewport = styled(NavigationMenu.Viewport)`
  position: absolute;
  top: 100%;
  padding-top: 22px;

  z-index: 2;

  animation: ${scaleIn} 200ms ease;
`;

export const Content = styled(NavigationMenu.Content)`
  position: relative;
  overflow: hidden;

  /* border: 1px solid ${(p) => p.theme.colors.lightBorder}; */
  border-radius: ${(p) => p.theme.radii.r24};
  box-shadow: 0px 24px 48px rgba(56, 54, 52, 0.08);

  background-color: ${(p) => p.theme.colors.white};

  /* ::before {
    content: "";
    position: absolute;
    bottom: 98%;
    left: 35%;
    width: 13px;
    height: 13px;

    border-top: 1px solid ${(p) => p.theme.colors.lightBorder};
    border-left: 1px solid ${(p) => p.theme.colors.lightBorder};
    background-color: ${(p) => p.theme.colors.white};

    transform: rotate(45deg);
  } */
`;

export const Indicator = styled(NavigationMenu.Indicator)`
  height: 22px;
  overflow: hidden;

  animation: ${fadeIn} 300ms ease;
`;

export const Arrow = styled.div`
  position: relative;
  top: 66%;
  left: 60%;
  width: 14px;
  height: 14px;
  background-color: white;
  transform: rotate(45deg);
`;

export const ContentList = styled.ul``;

export const ContentInem = styled.li`
  width: 250px;
  height: 38px;

  :not(:last-child) {
    border-bottom: 1px solid ${(p) => p.theme.colors.lightBorder};
  }
`;

export const ContentLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 24px;

  :hover {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
  }
`;
