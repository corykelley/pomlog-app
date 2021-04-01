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
			{tasks &&
				tasks.map((task) => (
					<article key={task.id}>
						<h2>{task.title}</h2>
						<p>{task.description}</p>
						<b>
							<i>Time Limit: {task.time_limit} - </i>
						</b>
						<i>Started On {task.start_date}</i>
					</article>
				))}
			<AddTask />
		</>
	);
}

export default App;
