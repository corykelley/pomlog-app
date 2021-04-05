import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Task from './components/Task';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
