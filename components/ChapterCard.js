import { Stack, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const ChapterCard = ({ text }) => {
	const bg = useColorModeValue('text.white', 'brand.100');
	const hoverBg = useColorModeValue('text.whiteHover', 'brand.200');
	const activeBg = useColorModeValue('text.whiteHover', 'brand.300');
	const shadow = useColorModeValue('sm', 'greenLg');
	const activeShadow = useColorModeValue('smActive', 'greenLg');

	return (
		<Link href={`/chapters/${text}`}>
			<Stack
				w='24'
				h='24'
				justifyContent='center'
				alignItems='center'
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
				<Box
					fontSize='2xl'
					color='text.black'
					fontWeight='bold'
					fontFamily='heading'
				>
					{text}
				</Box>
			</Stack>
		</Link>
	);
};

export default ChapterCard;
