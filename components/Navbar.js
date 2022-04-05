import { HStack, Box } from '@chakra-ui/react';

import ThemeToggler from './ThemeToggler';

const Navbar = () => {
	return (
		<HStack
			w='full'
			h='10vh'
			px={{ base: '5', md: '16', lg: '64' }}
			justifyContent='space-between'
			alignItems='center'
			fontFamily='Montserrat'
		>
			<Box fontWeight='bold' fontSize='36' color='brand.100'>
				kotobamm
			</Box>
			<ThemeToggler />
		</HStack>
	);
};

export default Navbar;
