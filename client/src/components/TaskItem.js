import { Link } from 'react-router-dom';
import moment from 'moment';
import { Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TaskItem = ({ task, taskDelete }) => {
	return (
		<Box borderRadius='lg' my='8' bg='tomato' w='100%' p={4} color='white'>
			<Link to={`/tasks/${task.id}`}>
				<Heading>{task.title}</Heading>
			</Link>
			<Text>{task.description}</Text>
			<Text>{task.time_limit}</Text>
			<Text>{moment(task.start_date).format('LL')}</Text>
			<DeleteIcon
				w={6}
				h={6}
				cursor='pointer'
				color='white'
				mt='4'
				onClick={() => taskDelete(task.id)}
			/>
		</Box>
	);
};

export default TaskItem;
