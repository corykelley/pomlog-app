import Task from './Task';

const TaskList = ({ tasks, taskDelete }) => {
	return (
		<section>
			{tasks &&
				tasks.map((task) => <Task task={task} taskDelete={taskDelete} />)}
		</section>
	);
};

export default TaskList;
