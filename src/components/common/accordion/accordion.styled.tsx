import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  padding: ${({ theme, isOpen }) => (isOpen ? `${theme.space.sp16} 0` : 0)};
  transition: ${({ theme }) => theme.transition.default};
`;

export const Header = styled.label`
  background-color: transparent;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.space.sp16} 0;
  z-index: 10;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.f18};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  text-transform: capitalize;
`;

export const ArrowContainer = styled.div<Props>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(-90deg)')};
  transition: ${({ theme }) => theme.transition.default};
`;

export const Content = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transition.default};
`;

export const StyledInput = styled.input`
  &:checked {
    & ~ .content {
      max-height: 236px;
    }
  }
`;
