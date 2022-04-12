import { HStack, Box } from '@chakra-ui/react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import Link from 'next/link';

const BackLink = ({ href }) => {
	return (
		<HStack userSelect='none' justifyContent='left' alignItems='center'>
			<Link href={href} passHref={true}>
				<HStack
					cursor='pointer'
					userSelect='none'
					_hover={{ color: 'text.secondary' }}
					justifyContent='left'
					alignItems='center'
				>
					<MdOutlineArrowBackIos size={23} />
					<Box>Back</Box>
				</HStack>
			</Link>
		</HStack>
	);
};

export default BackLink;
