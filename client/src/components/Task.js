const Task = ({ task }) => {
	return (
		<article>
			<h1>{task.title}</h1>
			<h2>{task.description}</h2>
			<p>{task.time_limit}</p>
			<p>{task.start_date}</p>
		</article>
	);
};

export default Task;
