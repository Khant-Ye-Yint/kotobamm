import { HStack } from '@chakra-ui/react';

import Layout from '../components/Layout';
import LevelCard from '../components/LevelCard';
import Header from '../components/Header';

const Home = () => {
	return (
		<Layout>
			<Header
				text='Choose your level'
				subText='Everyone starts from the bottom'
			/>
			<HStack
				justifyContent='center'
				alignItems='center'
				flexWrap='wrap'
				spacing={{ base: '0px', lg: '200px' }}
				my={{ base: '14', md: '24' }}
				gap='9'
			>
				<LevelCard img='/img/Boy1.png' alt='boy1' text='newbie' level='n5' />
				<LevelCard
					img='/img/Boy2.png'
					alt='boy2'
					text='intermediate'
					level='n4'
				/>
			</HStack>
		</Layout>
	);
};

export default Home;
