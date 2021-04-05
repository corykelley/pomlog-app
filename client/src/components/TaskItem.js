import { Link } from 'react-router-dom';
import moment from 'moment';

const TaskItem = ({ task, taskDelete }) => {
	return (
		<article>
			<Link to={`/tasks/${task.id}`}>
				<h1>{task.title}</h1>
			</Link>
			<h2>{task.description}</h2>
			<p>{task.time_limit}</p>
			<p>{moment(task.start_date).format('LL')}</p>
			<button onClick={() => taskDelete(task.id)}>DELETE</button>
		</article>
	);
};

export default TaskItem;
