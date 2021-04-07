import { Button } from '@chakra-ui/button';
import { Formik, Form, Field } from 'formik';

const AddTask = ({ taskSubmit }) => {
	return (
		<div>
			<Formik
				initialValues={{
					title: '',
					description: '',
					time_limit: 1,
					sprints: 1,
				}}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						taskSubmit('POST', values);
						actions.setSubmitting(false);
						actions.resetForm();
					}, 400);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<label htmlFor='title'>Title:</label>
						<Field
							type='text'
							name='title'
							placeholder='Take out the garbage'
							required
						/>
						<label htmlFor='description'>Description:</label>
						<Field
							type='text'
							name='description'
							placeholder='It smells and it needs to go...'
							required
						/>
						<label htmlFor='time_limit'>Time Limit:</label>
						<Field type='number' name='time_limit' />
						<label htmlFor='sprints'>Sprints:</label>
						<Field type='number' name='sprints' />
						<Button colorScheme='teal' type='submit' disabled={isSubmitting}>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AddTask;

/* <div>
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
</div> */
