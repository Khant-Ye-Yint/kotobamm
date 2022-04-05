import { Flex } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useColorMode, useColorModeValue } from '@chakra-ui/react';

const ThemeToggler = () => {
	const { colorMode, setColorMode } = useColorMode();

	const bg = useColorModeValue('text.white', 'brand.100');
	const hoverBg = useColorModeValue('text.whiteHover', 'brand.200');
	const activeBg = useColorModeValue('text.whiteHover', 'brand.300');
	const color = useColorModeValue('text.secondary', 'text.white');
	const shadow = useColorModeValue('sm', 'greenSm');
	const activeShadow = useColorModeValue('smActive', 'greenSm');

	return (
		<Flex
			color={color}
			w='10'
			h='10'
			p={1.5}
			bg={bg}
			justifyContent='center'
			alignItems='center'
			borderRadius='10'
			shadow={shadow}
			cursor='pointer'
			_hover={{
				bg: hoverBg,
			}}
			_active={{
				shadow: activeShadow,
				bg: activeBg,
			}}
			onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
			transition
		>
			{colorMode === 'light' ? <FaMoon size={32} /> : <FaSun size={32} />}
		</Flex>
	);
};

export default ThemeToggler;
