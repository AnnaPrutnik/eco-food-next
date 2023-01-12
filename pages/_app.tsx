import { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme/theme';
import { Layout } from 'components/common';
import GlobalStyles from 'styles/globalstyles';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
