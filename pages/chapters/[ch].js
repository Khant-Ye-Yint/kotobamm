import { useRouter } from 'next/router';

import { Grid, GridItem, Box, Divider, HStack, VStack } from '@chakra-ui/react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import LinkCard from '../../components/LinkCard';
import BackLink from '../../components/BackLink';

import client from '../../util/contentfulClient';

const Chapter = ({ data }) => {
	const router = useRouter();
	const { ch } = router.query;

	const level = ch >= 26 ? 'n4' : 'n5';

	const Row = ({ japanese, myanmar }) => (
		<>
			<GridItem
				w='100%'
				justifyContent='center'
				alignItems='center'
				display='flex'
			>
				<Box textAlign='left' w='full'>
					{japanese}
				</Box>
			</GridItem>
			<GridItem
				w='100%'
				justifyContent='cenetr'
				alignItems='ceneter'
				display='flex'
				flexDirection='row'
				fontFamily='myan'
			>
				<Box textAlign='left' w='full'>
					{myanmar}
				</Box>
			</GridItem>
			<GridItem colSpan={2} mb='5'>
				<Divider borderColor={'text.secondary'} w={'full'} />
			</GridItem>
		</>
	);

	return (
		<Layout>
			<BackLink href={`/${level}`} />
			<VStack spacing='12px' alignItems={{ base: 'start', md: 'center' }}>
				<Header
					text={`Chapter ${ch}`}
					subText='You can do it, we believe you'
				/>
				<LinkCard text='Flashcard' href={`/flashcard/${ch}`} />
			</VStack>
			<HStack justifyContent='center' alignItems='center'>
				<Grid
					templateColumns={'repeat(2, 1fr)'}
					gap={1.5}
					my={{ base: '14', md: '24' }}
					fontWeight='bold'
					fontSize='md'
					fontFamily='heading'
					w={['100%', '50%', '70%']}
				>
					<GridItem
						w='100%'
						justifyContent='center'
						alignItems='center'
						display='flex'
					>
						<Box
							textAlign='left'
							w='full'
							fontStyle='italic'
							fontSize='lg'
							color='brand.100'
						>
							日本語
						</Box>
					</GridItem>
					<GridItem
						w='100%'
						justifyContent='cenetr'
						alignItems='ceneter'
						display='flex'
						flexDirection='row'
					>
						<Box
							textAlign='left'
							w='full'
							fontStyle='italic'
							fontSize='lg'
							fontFamily='myan'
							color='brand.100'
						>
							မြန်မာ
						</Box>
					</GridItem>
					<GridItem colSpan={2} mb='5'>
						<Divider borderColor={'text.secondary'} w={'full'} />
					</GridItem>
					{data.map((chunk, i) => (
						<Row
							japanese={chunk.fields.japanese}
							myanmar={chunk.fields.myanmar}
							key={i}
						/>
					))}
				</Grid>
			</HStack>
		</Layout>
	);
};

export async function getStaticPaths() {
	const paths = Array.apply(null, { length: 50 }).map((e, i) => {
		const ch = i + 1;
		return {
			params: { ch: ch.toString() },
		};
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const level = params.ch >= 26 ? 'n4' : 'n5';
	const res = await client.getEntries({
		content_type: 'chapter',
		'fields.chapter[match]': `ch${params.ch}`,
		'fields.level[match]': `${level}`,
		order: 'sys.createdAt',
	});

	return { props: { data: res.items }, revalidate: 60 };
}

export default Chapter;
