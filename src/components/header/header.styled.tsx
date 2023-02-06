import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 64px;
  padding-left: ${({ theme }) => theme.space[5]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.space[7]}px;
    padding-right: ${({ theme }) => theme.space[7]}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 88px;
    padding-left: ${({ theme }) => theme.space[12]}px;
    padding-right: ${({ theme }) => theme.space[12]}px;
  } ;
`;

export const HeaderPartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[5]}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.space[11]}px;
  }
`;

export const HeaderDivider = styled.div`
  width: 1px;
  height: 32px;
  opacity: 0.05;
  border: 1px solid ${({ theme }) => theme.colors.text};
  margin-left: 16px;
`;
