import TaskItem from './TaskItem';

const TaskList = ({ tasks, taskDelete }) => {
	return (
		<section>
			{tasks &&
				tasks.map((task) => (
					<TaskItem key={task.id} task={task} taskDelete={taskDelete} />
				))}
		</section>
	);
};

export default TaskList;
