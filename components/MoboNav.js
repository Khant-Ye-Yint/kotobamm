import { Box, VStack, useColorModeValue, Center } from '@chakra-ui/react';
import ThemeToggler from './ThemeToggler';
import { FaTimes } from 'react-icons/fa';
import NavLink from './NavLink';

const MoboNav = ({ setShow }) => {
	const bg = useColorModeValue('text.white', 'background');
	const color = useColorModeValue('text.secondary', 'brand.100');

	return (
		<VStack
			position='absolute'
			top='0'
			left='0'
			w='full'
			h='100vh'
			bg={bg}
			zIndex={100}
			justifyContent='center'
			alignItems='center'
			gap='3'
		>
			<Box onClick={() => setShow(false)}>
				<NavLink text='Home' link='/' />
			</Box>
			<Box onClick={() => setShow(false)}>
				<NavLink text='About' link='/aboutMe' />
			</Box>

			<ThemeToggler />
			<Center
				pos='absolute'
				right='5'
				top='5'
				w='10'
				h='10'
				color={color}
				cursor='pointer'
				onClick={() => setShow(false)}
			>
				<FaTimes fontSize={32} />
			</Center>
		</VStack>
	);
};

export default MoboNav;
