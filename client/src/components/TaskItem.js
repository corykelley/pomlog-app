import { Link } from 'react-router-dom';
import moment from 'moment';
import { Heading, Text } from '@chakra-ui/layout';
import { Button, Box } from '@chakra-ui/react';

const TaskItem = ({ task, taskDelete }) => {
	return (
		<Box borderRadius='lg' my='8' bg='tomato' w='100%' p={4} color='white'>
			<Link to={`/tasks/${task.id}`}>
				<Heading>{task.title}</Heading>
			</Link>
			<Text>{task.description}</Text>
			<Text>{task.time_limit}</Text>
			<Text>{moment(task.start_date).format('LL')}</Text>
			<Button bg='teal' mt='2' onClick={() => taskDelete(task.id)}>
				DELETE
			</Button>
		</Box>
	);
};

export default TaskItem;
