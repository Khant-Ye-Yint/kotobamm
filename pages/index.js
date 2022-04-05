import { Box, VStack, HStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import Layout from '../components/Layout';
import LevelCard from '../components/LevelCard';

const Home = () => {
	const fontColor = useColorModeValue('text.black', 'text.white');

	return (
		<Layout>
			<VStack
				mt={{ base: '0', md: '10', lg: '16' }}
				spacing='8px'
				alignItems={{ base: 'flex-start', md: 'center' }}
			>
				<Box
					fontSize='3xl'
					fontWeight='bold'
					fontFamily='heading'
					color={fontColor}
				>
					Choose your level
				</Box>
				<Box fontSize='md' fontWeight='normal' color='text.secondary'>
					Everyone starts from the bottom
				</Box>
			</VStack>
			<HStack
				justifyContent='center'
				alignItems='center'
				flexWrap='wrap'
				spacing={{ base: '0px', lg: '200px' }}
				my={{ base: '14', md: '24' }}
				gap='9'
			>
				<LevelCard img='/img/Boy1.png' alt='boy1' text='newbie' level='N5' />
				<LevelCard
					img='/img/Boy2.png'
					alt='boy2'
					text='intermediate'
					level='N4'
				/>
			</HStack>
		</Layout>
	);
};

export default Home;
