import { HStack, Grid, GridItem } from '@chakra-ui/react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import ChapterCard from '../../components/ChapterCard';

const index = () => {
	return (
		<Layout>
			<Header text='Chapters' subText='Slow and steady win the race' />
			{/* <HStack
				justifyContent='space-between'
				alignItems='center'
				flexWrap='wrap'
				spacing={{ base: '0px', lg: '200px' }}
				my={{ base: '14', md: '24' }}
				gap='9'
			>
				<ChapterCard text='1' />
				<ChapterCard text='1' />
				<ChapterCard text='1' />
				<ChapterCard text='1' />
				<ChapterCard text='1' />
			</HStack> */}
			<Grid
				templateColumns={{
					base: 'repeat(3, 1fr)',
					md: 'repeat(4, 1fr)',
					lg: 'repeat(9, 1fr)',
				}}
				gap={[8, 12, 16]}
				my={{ base: '14', md: '24' }}
			>
				{Array.apply(null, { length: 20 }).map((e, i) => (
					<GridItem
						w='100%'
						justifyContent='center'
						alignItems='center'
						display='flex'
						key={i}
					>
						<ChapterCard text={i + 1} />
					</GridItem>
				))}
			</Grid>
		</Layout>
	);
};

export default index;
