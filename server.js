const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('short'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => res.send('hi there, this is working!'));
app.get('/tasks', (req, res) => {
	res.json({
		message: 'ok',
		data: {
			tasks: [
				{
					id: 1,
					title: 'Finish coding project',
					timeLimit: 5,
					sprints: 7,
				},
				{
					id: 2,
					title: '2 Leetcode Problems',
					timeLimit: 2,
					sprints: 2,
				},
			],
		},
	});
});

// Error handling
app.use('*', (req, res) => {
	res.status(404).send({
		error: 'Not Found',
	});
});
