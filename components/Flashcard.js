import { Box, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { useState } from 'react';

import styles from './Flashcard.module.css';
import classNames from 'classnames';

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

	let containClass = classNames({
		[styles.card]: !flip,
		[styles.flipCard]: flip,
	});

	const Card = ({ text, front }) => {
		let cardClass = classNames({
			[styles.front]: front,
			[styles.back]: !front,
		});

		return (
			<Stack
				// as={motion.div}
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
				position='absolute'
				_hover={{
					bg: hoverBg,
				}}
				_active={{
					shadow: activeShadow,
					bg: activeBg,
				}}
				// initial='hidden'
				// animate='visible'
				// variants={variants}
				// transitionDuration='0.5s'
				className={cardClass}
			>
				<Box
					fontFamily='myan'
					fontWeight='bold'
					fontSize='4xl'
					p='5'
					textAlign='center'
				>
					{text}
				</Box>
			</Stack>
		);
	};

	return (
		<Box
			as={motion.div}
			initial='hidden'
			animate='visible'
			variants={variants}
			transitionDuration='0.5s'
		>
			<Stack
				justifyContent='center'
				alignItems='center'
				mt='44'
				mb='44'
				position='relative'
				onClick={toggleFlip}
				className={containClass}
			>
				<Card text={japanese} front={true} />
				<Card text={myanmar} />
			</Stack>
		</Box>
	);
};

export default Flashcard;
