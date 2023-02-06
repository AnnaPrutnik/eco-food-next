import { globalCss } from '@nextui-org/react';

export const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    minHeight: '100vh',
  },

  '*': {
    boxSizing: 'border-box',
  },
});
