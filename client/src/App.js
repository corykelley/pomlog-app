import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
	const [tasks, setTasks] = useState(null);

	useEffect(() => {
		fetch(`/api/tasks/`)
			.then((res) => res.json())
			.then((data) => {
				setTasks(data.tasks);
				console.log(data.tasks);
			});
	}, []);

	return (
		<>
			<h1>hey</h1>
			{tasks &&
				tasks.map((task) => (
					<article key={task.id}>
						<h2>{task.title}</h2>
						<p>{task.description}</p>
					</article>
				))}
			<AddTask />
		</>
	);
}

export default App;
