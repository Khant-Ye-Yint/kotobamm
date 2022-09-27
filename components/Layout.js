import { VStack, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
	const bg = useColorModeValue('text.white', 'background');

	return (
		<VStack
			minH='100vh'
			bg={bg}
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3 }}
		>
			<Navbar />
			<Box
				w='full'
				height='100%'
				px={{ base: '5', md: '16', lg: '24', xl: '28', '2xl': '44' }}
				flex='1'
			>
				{children}
			</Box>
			<Footer />
		</VStack>
	);
};

export default Layout;
