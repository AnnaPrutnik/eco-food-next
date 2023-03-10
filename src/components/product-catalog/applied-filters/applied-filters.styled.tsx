import styled from 'styled-components';

export const MobileFilter = styled.button`
  width: 100%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  height: 40px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.r10};
  padding: 0 ${({ theme }) => theme.space.sp16};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  cursor: pointer;

  ${({ theme }) => theme.media.mdMin} {
    display: none;
  }
`;

export const CommonFilter = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.f16};
  line-height: ${({ theme }) => theme.lineHeights.buttons};
`;

export const FiltersCount = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const FilterActive = styled.ul`
  display: none;

  ${({ theme }) => theme.media.mdMin} {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const FilterItem = styled.li`
  display: flex;
  padding: 0 16px;
  height: 40px;
  align-items: center;
  gap: 8px;
  cursor: default;
`;

export const FilterTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.body};
  opacity: 0.6;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;
export const FilterValue = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.body};
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const DeleteBtn = styled.button`
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
`;

export const ClearAllBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  text-decoration-line: underline;
  cursor: pointer;
`;
