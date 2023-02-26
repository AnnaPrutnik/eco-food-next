import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Root = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  padding: 7px 0;
  border: none;
  background-color: transparent;

  color: ${(p) => p.theme.colors.text};

  ${(p) => p.theme.media.mdMin} {
    gap: 12px;
    padding: 10px 16px;

    cursor: pointer;

    border-radius: ${(p) => p.theme.radii.r10};

    font-family: ${(p) => p.theme.fonts.lato};
    font-size: ${(p) => p.theme.fontSizes.f16};
    font-weight: ${(p) => p.theme.fontWeights.medium};
    line-height: ${(p) => p.theme.lineHeights.buttons};

    background-color: ${(p) => p.theme.colors.white};
  }
`;

export const Portal = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${(p) => p.theme.colors.backdrop};
  position: fixed;
  inset: 0;
`;
export const Content = styled(Dialog.Content)`
  position: absolute;
  right: 23px;
  top: 64px;
  width: 329px;
  height: 400px;
  padding: 24px;
  border: 1px solid #edeae7;
  border-radius: ${(p) => p.theme.radii.r24};
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 15px 16px -12px rgba(56, 54, 52, 0.08);

  ::before {
    content: "";
    position: absolute;
    bottom: calc(98% + 2px);
    right: 16%;
    width: 13px;
    height: 13px;

    border: inherit;
    border-right: none;
    border-bottom: none;

    background-color: ${(p) => p.theme.colors.white};

    transform: rotate(45deg);
  }

  ${(p) => p.theme.media.smMax} {
    width: calc(100% - 20px);
    right: 50%;
    transform: translateX(50%);

    ::before {
      right: 19%;
    }
  }

  ${(p) => p.theme.media.mdMin} {
    top: 76px;

    ::before {
      right: 29%;
    }
  }

  ${(p) => p.theme.media.xmMin} {
    top: 88px;

    ::before {
      right: 16%;
    }
  }

  ${(p) => p.theme.media.lgMin} {
    right: 48px;
    top: 88px;
  }
`;
export const Title = styled(Dialog.Title)`
  font-family: ${(p) => p.theme.fonts.lato};
  font-size: ${(p) => p.theme.fontSizes.f16};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.heading};
`;
export const Close = styled(Dialog.Close)``;
