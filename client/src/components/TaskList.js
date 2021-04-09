import { Center, Grid, Heading } from '@chakra-ui/layout';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, taskDelete }) => {
	console.log(tasks);
	return (
		<section>
			<Grid templateColumns='repeat(3, 1fr)' gap={8}>
				{tasks && tasks.length > 0 ? (
					tasks.map((task) => (
						<TaskItem key={task.id} task={task} taskDelete={taskDelete} />
					))
				) : (
					<Center mt='12'>
						<Heading as='h2' size='3xl'>
							Oops... you don't have any tasks!
						</Heading>
					</Center>
				)}
			</Grid>
		</section>
	);
};

export default TaskList;
