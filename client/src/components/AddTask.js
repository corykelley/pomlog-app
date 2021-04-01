import { useState } from 'react';

const AddTask = () => {
	const [taskInfo, setTaskInfo] = useState({
		title: '',
		description: '',
		timeLimit: 0,
		sprints: 0,
	});

	const handleChange = (e) => {
		setTaskInfo({ [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		alert('A form was submitted: ' + taskInfo);

		fetch('http://localhost:3001/api/tasks', {
			method: 'POST',
			body: JSON.stringify(taskInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				return data;
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type='text'
						value={taskInfo.title}
						name='title'
						onChange={handleChange}
					/>
				</label>
				<label>
					Description:
					<input
						type='text'
						value={taskInfo.description}
						name='description'
						onChange={handleChange}
					/>
				</label>
				<label>
					Time Limit:
					<input
						type='number'
						value={taskInfo.timeLimit}
						name='timeLimit'
						onChange={handleChange}
					/>
				</label>
				<label>
					Sprints:
					<input
						type='text'
						value={taskInfo.sprints}
						name='sprints'
						onChange={handleChange}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default AddTask;
