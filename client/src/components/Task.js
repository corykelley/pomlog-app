const Task = ({ task, taskDelete }) => {
	return (
		<article>
			<h1>{task.title}</h1>
			<h2>{task.description}</h2>
			<p>{task.time_limit}</p>
			<p>{task.start_date}</p>
			<button onClick={() => taskDelete(task.id)}>DELETE</button>
		</article>
	);
};

export default Task;
