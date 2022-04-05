import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		heading: 'Montserrat',
		body: 'Inter',
	},
	colors: {
		text: {
			black: '#323232',
			secondary: '#94ADAE',
			white: '#ECF0F1',
			whiteHover: 'linear-gradient(145deg, #d4d8d9, #fdffff)',
		},
		brand: {
			100: '#22DD8E',
			200: '#1BB172',
			300: '#158455',
		},
		purple: {
			100: '#5647B8',
			200: '#453993',
			300: '#342B6E',
			background: '#140F31',
			hover: 'linear-gradient(145deg, #120e2c, #151034);',
		},
		background: '#140F31',
	},
	shadows: {
		sm: '4px 4px 8px #c9cccd,-4px -4px 8px #ffffff',
		md: '10px 10px 19px #c9cccd,-10px -10px 19px #ffffff',
		lg: '15px 15px 31px #c9cccd,-15px -15px 31px #ffffff',
		smActive: '4px 4px 8px #c9cccd inset,-4px -4px 8px #ffffff inset',
		mdActive: '10px 10px 19px #c9cccd inset,-10px -10px 19px #ffffff inset',
		lgActive: '15px 15px 31px #c9cccd inset,-15px -15px 31px #ffffff inset',
		greenSm: '2px 2px 4px rgb(34, 221, 142, 25%)',
		greenLg: '4px 4px 12px rgb(34, 221, 142, 25%)',
	},
	initialColorMode: 'light',
	useSystemColorMode: false,
});

export default theme;
