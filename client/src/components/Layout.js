import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/layout';

const Layout = ({ children }) => {
	return (
		<>
			<Container
				maxW='full'
				borderBottom='1px'
				borderBottomColor='gray.200'
				py='6'
				mb='4'
			>
				<Flex maxW='1200' mx='auto' px='4'>
					<Box p='2'>
						<Link to='/'>
							<Heading size='lg'>Pomlog</Heading>
						</Link>
					</Box>
					<Spacer />
					<Box>
						<Button colorScheme='teal' mr='4'>
							Sign Up
						</Button>
						<Button colorScheme='teal'>Log in</Button>
					</Box>
				</Flex>
			</Container>
			{children}
		</>
	);
};

export default Layout;
