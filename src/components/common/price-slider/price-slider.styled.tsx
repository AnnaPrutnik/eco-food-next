import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.input};
  opacity: 0.5;
`;

export const SliderBase = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightBackground};
  border-radius: 2px;
`;

interface SliderProgressProps {
  left: number;
  right: number;
}

export const SliderProgress = styled.div<SliderProgressProps>`
  position: absolute;
  left: ${({ left }) => left}%;
  right: ${({ right }) => right}%;
  height: 6px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 10px 20px -10px rgba(56, 54, 52, 0.08);
  border-radius: 1px;
`;

export const SliderThumb = styled.input`
  width: 100%;
  position: absolute;
  top: -7px;
  height: 6px;
  border: none;
  outline: none;
  background: none;
  pointer-events: none;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    width: 16px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 10px 20px -5px rgba(56, 54, 52, 0.08);
    border-radius: 4px;
    pointer-events: auto;
    -webkit-appearance: none;
  }
`;
