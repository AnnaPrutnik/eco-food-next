import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalstyles';
import { BodyScroll } from 'components';
import { theme } from 'theme/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BodyScroll>
				<Component {...pageProps} />
			</BodyScroll>
		</ThemeProvider>
	);
}
