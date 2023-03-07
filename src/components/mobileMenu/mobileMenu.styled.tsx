import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { rollIn, rollOut, showOerlay, hideOerlay } from "styles/animation";

export const Root = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  border: none;
  color: ${(p) => p.theme.colors.text};
  background-color: transparent;

  ${(p) => p.theme.media.xmMin} {
    display: none;
  }
`;

export const Portal = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${(p) => p.theme.colors.backdrop};
  position: fixed;
  inset: 0;

  &[data-state="open"] {
    animation: ${showOerlay} 200ms ease;
  }

  &[data-state="closed"] {
    animation: ${hideOerlay} 300ms ease;
  }
`;

export const Content = styled(Dialog.Content)`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.white};

  ${(p) => p.theme.media.smMin} {
    width: 320px;
    border-left: 1px solid ${(p) => p.theme.colors.darkBorder};
  }

  &[data-state="open"] {
    animation: ${rollIn} 200ms ease;
  }

  &[data-state="closed"] {
    animation: ${rollOut} 200ms ease;
  }
`;

export const Close = styled(Dialog.Close)`
  display: flex;
  align-items: center;
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const List = styled.ul``;

export const Item = styled.li``;

export const CategoryLink = styled.a`
  display: flex;
  padding: 5px 25px;
  font-family: ${(p) => p.theme.fonts.lato};
  font-size: ${(p) => p.theme.fontSizes.f16};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.heading};

  color: ${(p) => p.theme.colors.text};

  :hover,
  :focus {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
  }
`;
