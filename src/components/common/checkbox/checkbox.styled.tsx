import styled from 'styled-components';
import { Field } from 'formik';

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sp8};
  max-height: 180px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightBackground};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text};
    border-radius: 1.5px;
    cursor: pointer;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  align-items: center;
  cursor: pointer;

  & span::first-letter {
    text-transform: capitalize;
  }
`;

export const StyledCheckbox = styled(Field)`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface StyledSpanProps {
  isChecked: boolean;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.white};
  border: 1px solid;
  border-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.lightBackground};
  margin-right: ${({ theme }) => theme.space.sp12};
  box-shadow: ${({ isChecked }) =>
    isChecked
      ? '0px 5px 10px -5px rgba(56, 54, 52, 0.1)'
      : '0px 4px 6px -5px rgba(56, 54, 52, 0.1)'};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => `all ${theme.transition}`};
`;
