import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Popover from './components/PopOver';

function Home() {
	const [tasks, setTasks] = useState(null);

	const getTasks = () => {
		fetch(`/api/tasks/`)
			.then((res) => res.json())
			.then((data) => {
				setTasks(data.tasks);
				console.log(data.tasks);
			});
	};

	const taskSubmit = (method, data, id) => {
		fetch(`/api/tasks/new/${id || ''}`, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log(res.json());
			getTasks();
		});
	};

	const taskDelete = (id) => {
		fetch(`/api/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				getTasks();
			});
	};

	useEffect(() => {
		getTasks();
	}, []);

	// TODO: HOOK UP ADD TASK BUTTON IN LAYOUT/NAV!

	return (
		<>
			<TaskList tasks={tasks} taskDelete={taskDelete} />
			<Popover taskSubmit={taskSubmit} />
		</>
	);
}

export default Home;
