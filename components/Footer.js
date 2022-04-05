import { HStack, Box } from '@chakra-ui/react';

const Footer = () => {
	return (
		<HStack
			textAlign='center'
			w='full'
			fontSize='sm'
			fontFamily='Inter'
			h='10vh'
			justifyContent='center'
			alignItems='center'
			px={{ base: '5', md: '16', lg: '64' }}
		>
			<Box>
				<Box color='brand.100' display='inline-block' fontWeight='bold'>
					kotobamm
				</Box>{' '}
				<Box display='inline'>
					&copy; {new Date().getFullYear()}, Made with 💖 by{' '}
				</Box>
				<Box color='brand.100' display='inline-block' fontWeight='bold'>
					Khant Ye Yint
				</Box>
			</Box>
		</HStack>
	);
};

export default Footer;
