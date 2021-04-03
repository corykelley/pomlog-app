import { useState } from 'react';

const AddTask = ({ taskSubmit }) => {
	const [taskInfo, setTaskInfo] = useState({
		title: '',
		description: '',
		time_limit: 0,
		sprints: 0,
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		setTaskInfo({ ...taskInfo, [name]: val });
	};

	const addTask = (e) => {
		taskSubmit('POST', e, taskInfo);
		setTaskInfo({
			title: '',
			description: '',
			time_limit: 0,
			sprints: 0,
		});
	};

	return (
		<div>
			<form onSubmit={(e) => addTask(e)}>
				<label>
					Title:
					<input
						type='text'
						value={taskInfo.title || ''}
						name='title'
						onChange={handleChange}
					/>
				</label>
				<label>
					Description:
					<input
						type='text'
						value={taskInfo.description || ''}
						name='description'
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label>
					Time Limit:
					<input
						type='number'
						value={taskInfo.time_limit}
						name='time_limit'
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label>
					Sprints:
					<input
						type='number'
						value={taskInfo.sprints}
						name='sprints'
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default AddTask;
