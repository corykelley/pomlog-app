import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Task = () => {
	let { id } = useParams();

	const [taskInfo, setTaskInfo] = useState(null);

	useEffect(() => {
		fetch(`/api/tasks/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setTaskInfo(data.task);
				console.log(data.task);
			});
	}, [id]);

	console.log(taskInfo);

	return (
		<>
			{taskInfo ? (
				<article>
					<h1>{taskInfo.title}</h1>
					<h2>{taskInfo.description}</h2>
					<i>{taskInfo.start_date}</i>
				</article>
			) : (
				<h3>loading...</h3>
			)}
		</>
	);
};

export default Task;
