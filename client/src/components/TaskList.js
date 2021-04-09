import { Center, Grid, Heading } from '@chakra-ui/layout';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, taskDelete }) => {
	console.log(tasks);
	return (
		<section>
			{tasks && tasks.length > 0 ? (
				<Grid templateColumns='repeat(3, 1fr)' gap={8}>
					{tasks.map((task) => (
						<TaskItem key={task.id} task={task} taskDelete={taskDelete} />
					))}
				</Grid>
			) : (
				<Center my='12'>
					<Heading as='h2' size='3xl'>
						Oops... you don't have any tasks!
					</Heading>
				</Center>
			)}
		</section>
	);
};

export default TaskList;
