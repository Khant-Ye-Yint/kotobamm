import { Box, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { useState } from 'react';

const Flashcard = ({ japanese, myanmar }) => {
	const [flip, setFlip] = useState(false);

	const toggleFlip = () => setFlip(!flip);

	const bg = useColorModeValue('text.white', 'brand.100');
	const hoverBg = useColorModeValue('text.whiteHover', 'brand.200');
	const activeBg = useColorModeValue('text.whiteHover', 'brand.300');
	const color = useColorModeValue('text.black', 'purple.300');
	const shadow = useColorModeValue('sm', 'greenSm');
	const activeShadow = useColorModeValue('smActive', 'greenSm');

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.7 },
	};

	return (
		<Stack justifyContent='center' alignItems='center' mt='36'>
			<Stack
				as={motion.div}
				width='2xs'
				height='2xs'
				justifyContent='center'
				alignItems='center'
				shadow={shadow}
				borderRadius='20px'
				userSelect='none'
				cursor='pointer'
				color={color}
				bg={bg}
				_hover={{
					bg: hoverBg,
				}}
				_active={{
					shadow: activeShadow,
					bg: activeBg,
				}}
				onClick={toggleFlip}
				initial='hidden'
				animate='visible'
				variants={variants}
				transitionDuration='0.5s'
			>
				<Box
					fontFamily='myan'
					fontWeight='bold'
					fontSize='4xl'
					p='5'
					textAlign='center'
				>
					{flip ? myanmar : japanese}
				</Box>
			</Stack>
		</Stack>
	);
};

export default Flashcard;
