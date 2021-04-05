import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Home from './Home';
import Task from './components/Task';
import Layout from './components/Layout';

function App() {
	return (
		<>
			<Router>
				<Layout>
					<Container maxW='1200'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/tasks/:id'>
								<Task />
							</Route>
						</Switch>
					</Container>
				</Layout>
			</Router>
		</>
	);
}

export default App;
