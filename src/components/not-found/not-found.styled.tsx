import styled from 'styled-components';
import Image from 'next/image';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.gilroy};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.f24};
  line-height: ${({ theme }) => theme.lineHeights.heading};

  ${({ theme }) => theme.media.mdMin} {
    font-size: ${({ theme }) => theme.fontSizes.f32};
  }
`;
