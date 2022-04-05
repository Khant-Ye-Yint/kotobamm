import { VStack, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	const bg = useColorModeValue('text.white', 'background');

	return (
		<VStack minH='100vh' bg={bg}>
			<Navbar />
			<Box
				w='full'
				height='100%'
				px={{ base: '5', md: '16', lg: '64' }}
				flex='1'
			>
				{children}
			</Box>
			<Footer />
		</VStack>
	);
};

export default Layout;
