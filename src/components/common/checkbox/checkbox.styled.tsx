import styled from 'styled-components';

export const CheckboxList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
  max-height: 180px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #${({ theme }) => theme.colors.lightBackground};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text};
    border-radius: 1.5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  font-size: 15px;
  line-height: 1.2;
  align-items: center;

  & svg {
    transform: scale(0.8);
  }
`;

export const StyledCheckbox = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface StyledSpanProps {
  isChecked: boolean | undefined;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : '#fff'};
  border: 1px solid;
  border-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : '#F5F3F1'};
  margin-right: 12px;
  box-shadow: ${({ theme, isChecked }) =>
    isChecked
      ? '0px 5px 10px -5px rgba(56, 54, 52, 0.1)'
      : '0px 4px 6px -5px rgba(56, 54, 52, 0.1)'};
  border-radius: 5px;
  stroke: #fff;
  transition: ${({ theme }) => `all ${theme.transition}`};
`;
