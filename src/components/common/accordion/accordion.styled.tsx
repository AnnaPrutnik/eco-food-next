import styled from 'styled-components';
import { visuallyHidden } from 'components';

export const StyledDetail = styled.details`
  outline: transparent;
  margin-top: 16px;
  margin-bottom: 16px;
  transition: ${({ theme }) => theme.transition.default};

  &[open] {
    margin-top: 32px;
    margin-bottom: 32px;

    & svg {
      transform: rotate(90deg);
    }
  }
`;

export const StyledSummary = styled.summary`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.f18};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  text-transform: capitalize;

  &::webkit-details-marker {
    ${visuallyHidden}
  }

  & svg {
    transform: rotate(-90deg);
    transition: ${({ theme }) => theme.transition.default};
  }
`;

export const StyledDetailsChildren = styled.div`
  padding-top: ${({ theme }) => theme.space.sp16};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sp16};
`;
