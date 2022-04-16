import { Box, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import Link from 'next/link';

const LinkCard = ({ text, href }) => {
	const bg = useColorModeValue('text.white', 'brand.100');
	const hoverBg = useColorModeValue('text.whiteHover', 'brand.200');
	const activeBg = useColorModeValue('text.whiteHover', 'brand.300');
	const color = useColorModeValue('text.black', 'text.white');
	const shadow = useColorModeValue('sm', 'greenSm');
	const activeShadow = useColorModeValue('smActive', 'greenSm');

	return (
		<Stack
			justifyContent='center'
			alignItems={{ base: 'flex-start', md: 'center' }}
		>
			<Link href={href} passHref={true}>
				<Box
					shadow={shadow}
					p='2'
					rounded='md'
					fontSize='md'
					fontFamily='heading'
					display='inline-block'
					bg={bg}
					color={color}
					cursor='pointer'
					userSelect='none'
					_hover={{
						bg: hoverBg,
					}}
					_active={{
						shadow: activeShadow,
						bg: activeBg,
					}}
				>
					{text}
				</Box>
			</Link>
		</Stack>
	);
};

export default LinkCard;
