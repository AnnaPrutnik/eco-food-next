import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { InitialDataProvider } from 'context';
import GlobalStyle from 'styles/globalstyles';
import { theme } from 'theme/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<InitialDataProvider>
				<Component {...pageProps} />
			</InitialDataProvider>
		</ThemeProvider>
	);
}
