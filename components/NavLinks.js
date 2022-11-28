import ThemeToggler from './ThemeToggler';
import { HStack, Box } from '@chakra-ui/react';
import NavLink from './NavLink';

const NavLinks = () => {
	return (
		<HStack gap={7}>
			<NavLink text='Home' link='/' />
			<NavLink text='About' link='/aboutMe' />
			<ThemeToggler />
		</HStack>
	);
};

export default NavLinks;
