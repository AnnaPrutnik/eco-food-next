import { FC } from 'react';
import { AppProps } from 'next/app';
import { Layout } from 'components';
import { NextUIProvider } from '@nextui-org/react';
import { theme } from 'styles/theme';
import 'styles/global-styled.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={theme} disableBaseline>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
};

export default App;
