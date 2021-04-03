import Task from './Task';

const TaskList = ({ tasks }) => {
	return (
		<section>{tasks && tasks.map((task) => <Task task={task} />)}</section>
	);
};

export default TaskList;
