import * as Popover from "@radix-ui/react-popover";
import styled, { css } from "styled-components";

const Responsive = css`
  display: none;

  ${(p) => p.theme.media.lgMin} {
    display: block;
  }
`;

export const Root = styled(Popover.Root)``;

export const Trigger = styled(Popover.Trigger)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 0;
  cursor: pointer;
  border: none;
  color: ${(p) => p.theme.colors.text};
  background-color: transparent;

  &[data-state="open"] span {
    transform: rotate(90deg);
  }
`;

export const Portal = styled(Popover.Portal)``;

export const Content = styled(Popover.Content)`
  position: relative;
  right: 23px;
  top: 16px;
  width: 329px;
  height: fit-content;
  padding: 15px 24px;
  border: 1px solid ${(p) => p.theme.colors.lightBorder};
  border-radius: ${(p) => p.theme.radii.r24};
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 15px 16px -12px rgba(56, 54, 52, 0.08);

  ::before {
    content: "";
    position: absolute;
    top: -8px;
    right: 33%;
    width: 13px;
    height: 13px;

    border: inherit;
    border-right: none;
    border-bottom: none;

    background-color: ${(p) => p.theme.colors.white};

    transform: rotate(45deg);
  }

  ${(p) => p.theme.media.smMax} {
    width: calc(100vw - 20px);
    right: 10px;

    ::before {
      right: 35%;
    }
  }

  ${(p) => p.theme.media.mdMin} {
    top: 20px;

    ::before {
      right: 41%;
    }
  }
`;

export const FullName = styled.p`
  font-family: ${(p) => p.theme.fonts.lato};
  font-size: ${(p) => p.theme.fontSizes.f16};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.heading};
`;

export const Name = styled(FullName)`
  ${Responsive}
`;

export const Email = styled.p`
  color: ${(p) => p.theme.colors.text};
  opacity: 0.5;
`;

export const Arrow = styled.span`
  ${Responsive}
  font-size: 20px;
  transform: rotate(-90deg);
  transition: transform 200ms ease;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  border-radius: 10px;

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.black};
    background-color: ${(p) => p.theme.colors.darkBackground};

    & svg {
      color: ${(p) => p.theme.colors.primary};
      fill: ${(p) => p.theme.colors.white};
    }
  }
`;

export const List = styled.ul``;
export const Item = styled.li``;
