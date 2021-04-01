import { useState } from 'react';

const AddTask = () => {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [timeLimit, setTimeLimit] = useState(0);
	const [sprints, setSprints] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('/api/tasks/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				description,
				time_limit: timeLimit,
				sprints,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				return data;
			});
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Title:
					<input
						type='text'
						value={title || ''}
						name='title'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					Description:
					<input
						type='text'
						value={description || ''}
						name='description'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<label>
					Time Limit:
					<input
						type='number'
						value={timeLimit}
						name='timeLimit'
						onChange={(e) => setTimeLimit(e.target.value)}
					/>
				</label>
				<label>
					Sprints:
					<input
						type='number'
						value={sprints}
						name='sprints'
						onChange={(e) => setSprints(e.target.value)}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default AddTask;
