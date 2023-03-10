import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";

export const Root = styled(Popover.Root)``;

export const Trigger = styled(Popover.Trigger)`
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  border: none;
  color: ${(p) => p.theme.colors.text};
  background-color: transparent;

  ${(p) => p.theme.media.mdMin} {
    display: none;
  }
`;

export const Portal = styled(Popover.Portal)``;

export const Content = styled(Popover.Content)`
  width: 100vw;
  margin-top: 16px;
  padding: 0 16px;
`;
