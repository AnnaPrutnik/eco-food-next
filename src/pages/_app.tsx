import { FC } from 'react';
import { AppProps } from 'next/app';
import { Layout } from 'components';
import { NextUIProvider } from '@nextui-org/react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global-styles';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();
  return (
    <NextUIProvider theme={theme} disableBaseline>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
};

export default App;
