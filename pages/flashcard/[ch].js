import { useRouter } from 'next/router';
import { Box, HStack } from '@chakra-ui/react';

import { useState } from 'react';

import Layout from '../../components/Layout';
import LinkCard from '../../components/LinkCard';
import Flashcard from '../../components/Flashcard';
import BackLink from '../../components/BackLink';

import client from '../../util/contentfulClient';

import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
} from 'react-icons/md';

const FalshCardPage = ({ data }) => {
	const router = useRouter();
	const { ch } = router.query;

	const [current, setCurrent] = useState(0);
	const length = data.length;

	const next = () => {
		setCurrent(current === length - 1 ? current : current + 1);
	};

	const previous = () => {
		setCurrent(current === 0 ? current : current - 1);
	};

	return (
		<Layout>
			<BackLink href={`/chapters/${ch}`} />
			<Box>
				{data.map((chunk, id) => (
					<div key={id}>
						{id === current && (
							<Flashcard
								myanmar={chunk.fields.myanmar}
								japanese={chunk.fields.japanese}
							/>
						)}
					</div>
				))}
			</Box>
			<HStack
				justifyContent='space-between'
				alignItems='center'
				fontSize='md'
				fontFamily='heading'
				px={{ base: '0', md: '96' }}
				mt='20'
			>
				<HStack
					cursor='pointer'
					userSelect='none'
					_hover={{ color: 'text.secondary' }}
					onClick={previous}
				>
					<MdOutlineArrowBackIos size={23} />
					<Box>Previous</Box>
				</HStack>
				<HStack
					cursor='pointer'
					userSelect='none'
					_hover={{ color: 'text.secondary' }}
					onClick={next}
				>
					<Box>Next</Box>
					<MdOutlineArrowForwardIos size={23} />
				</HStack>
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
	const res = await client.getEntries({
		content_type: 'chapter',
		'fields.chapter[match]': `ch${params.ch}`,
		order: 'sys.createdAt',
	});

	return { props: { data: res.items } };
}

export default FalshCardPage;
