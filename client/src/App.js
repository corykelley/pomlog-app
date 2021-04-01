import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
	const [tasks, setTasks] = useState(null);

	const getTasks = () => {
		fetch(`/api/tasks/`)
			.then((res) => res.json())
			.then((data) => {
				setTasks(data.tasks);
				console.log(data.tasks);
			});
	};

	const handleSubmit = (e, data) => {
		e.preventDefault();

		fetch('/api/tasks/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				getTasks();
			});
	};

	useEffect(() => {
		getTasks();
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
			<AddTask handleSubmit={handleSubmit} />
		</>
	);
}

export default App;
