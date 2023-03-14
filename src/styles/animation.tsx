import { keyframes } from 'styled-components';

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

export const scaleOut = keyframes`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`;

export const rollIn = keyframes`
  from {
    transform: translateX(100%);
  }
`;

export const rollOut = keyframes`
  to {
    transform: translateX(100%);
  }
`;

export const hideOerlay = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const showOerlay = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideDown = keyframes`
  from {
    height: 0;
  }
     to {
    height: var(--radix-accordion-content-height);
  }
`;

export const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;
