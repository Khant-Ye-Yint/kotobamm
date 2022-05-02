import { Grid, GridItem } from '@chakra-ui/react';

import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ChapterCard from '../components/ChapterCard';
import BackLink from '../components/BackLink';

import client from '../util/contentfulClient';

const Index = ({ data }) => {
	const router = useRouter();
	const { level } = router.query;

	const { startCh, totalCh } = data[0].fields;

	return (
		<Layout>
			<BackLink href='/' />
			<Header
				text={`${level} Chapters`}
				subText='Slow and steady win the race'
			/>
			<Grid
				templateColumns={{
					base: 'repeat(3, 1fr)',
					md: 'repeat(4, 1fr)',
					lg: 'repeat(9, 1fr)',
				}}
				gap={[8, 12, 16]}
				my={{ base: '14', md: '24' }}
			>
				{Array.apply(null, { length: totalCh }).map((e, i) => (
					<GridItem
						w='100%'
						justifyContent='center'
						alignItems='center'
						display='flex'
						key={i}
					>
						<ChapterCard text={+startCh + i} />
					</GridItem>
				))}
			</Grid>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await client.getEntries({
		content_type: 'level',
	});

	const paths = res.items.map((item) => ({
		params: { level: item.fields.name },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await client.getEntries({
		content_type: 'level',
		'fields.name[match]': params.level,
	});

	return { props: { data: res.items }, revalidate: 60 };
}

export default Index;
