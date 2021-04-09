import { Link } from 'react-router-dom';
import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/layout';
import AddTask from './AddTask';

const Layout = ({ children }) => {
	return (
		<>
			<Container
				maxW='full'
				borderBottom='1px'
				borderBottomColor='gray.200'
				py='2'
				mb='4'
			>
				<Flex alignItems='center' maxW='1200' mx='auto' px='4'>
					<Box p='2'>
						<Link to='/'>
							<Heading size='lg'>Pomlog</Heading>
						</Link>
					</Box>
					<Spacer />
					<Box>
						<AddTask inNav />
					</Box>
				</Flex>
			</Container>
			{children}
		</>
	);
};

export default Layout;
