import { useState } from 'react';

const AddTask = ({ handleSubmit }) => {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [timeLimit, setTimeLimit] = useState(0);
	const [sprints, setSprints] = useState(0);

	// UPDATE HOW WE HANDLE THE SUBMIT FUNCTION - SHOULD BE ABLE TO DELETE, POST, UPDATE, ETC.
	return (
		<div>
			<form
				onSubmit={(e) =>
					handleSubmit(e, {
						title,
						description,
						time_limit: timeLimit,
						sprints,
					})
				}
			>
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
