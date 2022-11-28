import Layout from '../components/Layout';
import { HStack, Box } from '@chakra-ui/react';
import ExplainImg from '../public/img/Explain.png';
import Image from 'next/image';

import client from '../util/contentfulClient';

const AboutMe = ({ description, about }) => {
	return (
		<Layout>
			<Box fontFamily='myan' fontSize='3xl' letterSpacing='wide'>
				{about}
			</Box>
			<HStack
				justifyContent='center'
				alignItems='center'
				mt='5'
				flexWrap='wrap'
				gap={{ base: '3', md: '5' }}
			>
				<Box
					fontSize={{ base: 'md', lg: 'lg' }}
					flex='1'
					minWidth='300px'
					color='text.primary'
					fontFamily='myan'
				>
					{description}
				</Box>
				<HStack
					justifyContent='center'
					alignItems='center'
					mt={{ base: '10', md: '20' }}
					width='50%'
					minWidth={{ base: '300px', md: '500px', lg: '300px' }}
					height={{ base: '300px', md: '500px', lg: '300px' }}
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
		props: {
			description: res.fields.description.content[0].content[0].value,
			about: res.fields.about,
		},
		revalidate: 60,
	};
}

export default AboutMe;
