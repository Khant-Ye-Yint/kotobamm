import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

import { AnimateSharedLayout } from 'framer-motion';

import '@fontsource/inter/700.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/padauk/700.css';
import '@fontsource/lobster/400.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AnimateSharedLayout>
				<Component {...pageProps} />
			</AnimateSharedLayout>
		</ChakraProvider>
	);
}

export default MyApp;
