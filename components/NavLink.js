import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const NavLink = ({ link, text }) => {
	const color = useColorModeValue('text.secondary', 'brand.100');

	return (
		<Link href={link} passHref>
			<Box
				fontSize='xl'
				color={color}
				_hover={{ color: 'brand.200' }}
				cursor='pointer'
			>
				{text}
			</Box>
		</Link>
	);
};

export default NavLink;
