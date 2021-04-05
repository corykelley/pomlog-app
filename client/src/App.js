import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Home from './Home';
import Task from './components/Task';

function App() {
	return (
		<>
			<Container>
				<Router>
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/tasks/:id'>
							<Task />
						</Route>
					</Switch>
				</Router>
			</Container>
		</>
	);
}

export default App;
