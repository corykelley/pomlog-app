export default function Index() {
	getData();
	return (
		<>
			<h1>Ho ho ho!</h1>
		</>
	);
}

const getData = () => {
	const data = fetch(`http://localhost:3001/api/tasks`)
		.then((res) => res.json())
		.then((tasks) => console.log(tasks));

	return data;
};
