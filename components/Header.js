import { Box, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const Header = ({ text, subText }) => {
	const fontColor = useColorModeValue('text.black', 'text.white');

	return (
		<VStack
			mt={{ base: '0', md: '10', lg: '16' }}
			spacing='8px'
			alignItems={{ base: 'flex-start', md: 'center' }}
		>
			<Box
				fontSize='3xl'
				fontWeight='bold'
				fontFamily='heading'
				color={fontColor}
				textTransform='capitalize'
			>
				{text}
			</Box>
			<Box fontSize='md' fontWeight='normal' color='text.secondary'>
				{subText}
			</Box>
		</VStack>
	);
};

export default Header;
