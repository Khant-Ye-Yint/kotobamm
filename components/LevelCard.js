import { HStack, VStack, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import Image from 'next/image';

const LevelCard = ({ img, alt, level, text }) => {
	const bg = useColorModeValue('text.white', 'brand.100');
	const hoverBg = useColorModeValue('text.whiteHover', 'brand.200');
	const activeBg = useColorModeValue('text.whiteHover', 'brand.300');
	const shadow = useColorModeValue('sm', 'greenLg');
	const activeShadow = useColorModeValue('smActive', 'greenLg');

	return (
		<HStack
			p='8'
			w='sm'
			justifyContent='space-between'
			alignItems='flex-end'
			bg={bg}
			_hover={{
				bg: hoverBg,
			}}
			_active={{
				shadow: activeShadow,
				bg: activeBg,
			}}
			shadow={shadow}
			borderRadius='20px'
			cursor='pointer'
		>
			<VStack alignItems='start' spacing='0'>
				<Box fontSize='sm' color='purple.100' fontFamily='body'>
					{text}
				</Box>
				<Box
					fontSize='4xl'
					color='text.black'
					fontWeight='bold'
					fontFamily='heading'
				>
					{level}
				</Box>
			</VStack>
			<Image src={img} width='90px' height='90px' alt={alt} />
		</HStack>
	);
};

export default LevelCard;
