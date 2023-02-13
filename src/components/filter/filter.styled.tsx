import styled from 'styled-components';
import { Form } from 'formik';

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.08;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.f24};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme }) => theme.colors.heading};
`;
