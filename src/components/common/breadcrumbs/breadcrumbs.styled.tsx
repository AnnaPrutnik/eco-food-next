import styled from 'styled-components';

export const Text = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.body};
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.body};

  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;
