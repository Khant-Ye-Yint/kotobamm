import { HStack, Box, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import MoboNav from './MoboNav';
import NavIcon from './NavIcon';
import NavLinks from './NavLinks';
import { useState } from 'react';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [onMobo] = useMediaQuery('(max-width: 450px)');

	return (
		<HStack
			w='full'
			maxW='8xl'
			h='10vh'
			px={{ base: '5', md: '16', lg: '24', xl: '28', '2xl': '44' }}
			justifyContent='space-between'
			alignItems='center'
			fontFamily='Montserrat'
			pos='relative'
		>
			{show && <MoboNav setShow={setShow} />}
			<Link href='/' passHref={true}>
				<Box fontWeight='bold' fontSize='36' color='brand.100' cursor='pointer'>
					kotobamm
				</Box>
			</Link>
			{onMobo ? <NavIcon show={show} setShow={setShow} /> : <NavLinks />}
		</HStack>
	);
};

export default Navbar;
