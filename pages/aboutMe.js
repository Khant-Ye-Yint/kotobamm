import Layout from '../components/Layout';
import { HStack, Box } from '@chakra-ui/react';
import ExplainImg from '../public/img/Explain.png';
import Image from 'next/image';

import client from '../util/contentfulClient';

const AboutMe = ({ data }) => {
	return (
		<Layout>
			<HStack
				justifyContent='center'
				alignItems='center'
				mt='5'
				flexWrap='wrap'
				gap={{ base: '0', md: '5' }}
			>
				<Box
					fontSize={{ base: 'md', lg: 'lg' }}
					flex='1'
					minWidth='300px'
					color='text.primary'
					fontFamily='myan'
				>
					{data}
				</Box>
				<HStack
					justifyContent='center'
					alignItems='center'
					mt={{ base: '10', md: '20' }}
					width='50%'
					minWidth={{ base: '300px', md: '700px', lg: '300px' }}
					height='500px'
					position='relative'
				>
					<Image
						src={ExplainImg}
						alt='finish'
						layout='fill'
						objectFit='contain'
						objectPosition='center'
						priority
					/>
				</HStack>
			</HStack>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await client.getEntry('46IVjzrt9DEdyckJafcZ1W');

	return {
		props: { data: res.fields.description.content[0].content[0].value },
		revalidate: 60,
	};
}

export default AboutMe;
