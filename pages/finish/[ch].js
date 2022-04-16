import Layout from '../../components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LinkCard from '../../components/LinkCard';

import { HStack, VStack, Box } from '@chakra-ui/react';

const FinishPage = () => {
	const router = useRouter();
	const { ch } = router.query;

	const level = ch >= 26 ? 'n4' : 'n5';

	return (
		<Layout>
			<VStack spacing='10'>
				<HStack
					justifyContent='center'
					alignItems='center'
					mt={{ base: '10', md: '20' }}
				>
					<Image
						src='/img/finish.svg'
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
					Yay, you did it!
				</Box>
				<HStack justifyContent='center' alignItems='center' spacing='10'>
					<LinkCard text='Start Over' href={`/flashcard/${ch}`} />
					<LinkCard text='Chapters' href={`/${level}`} />
				</HStack>
			</VStack>
		</Layout>
	);
};

export default FinishPage;
