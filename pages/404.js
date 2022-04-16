import Layout from '../components/Layout';
import Image from 'next/image';

import LinkCard from '../components/LinkCard';

import { HStack, VStack, Box } from '@chakra-ui/react';

const ErrorPage = () => {
	return (
		<Layout>
			<VStack spacing='10'>
				<HStack
					justifyContent='center'
					alignItems='center'
					mt={{ base: '10', md: '20' }}
				>
					<Image
						src='/img/pageNotFound.png'
						alt='finish'
						width='480'
						height='319'
						priority
					/>
				</HStack>
				<Box
					fontWeight='extrabold'
					fontSize='5xl'
					color='brand.100'
					fontFamily='lobster'
				>
					We don&apos;t have what you looking for.
				</Box>
				<HStack justifyContent='center' alignItems='center' spacing='10'>
					<LinkCard text='Go to home' href='/' />
				</HStack>
			</VStack>
		</Layout>
	);
};

export default ErrorPage;
