import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

import '@fontsource/inter/700.css';
import '@fontsource/montserrat/700.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
