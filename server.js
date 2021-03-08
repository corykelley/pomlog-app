const express = require('express');
const app = express();
const morgan = require('morgan');

const tasksRouter = require('./routes/task-routes');

app.use(morgan('short'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => res.send('index'));

app.use('/api/tasks', tasksRouter);

// Error handling
app.use('*', (req, res) => {
	res.status(404).send({
		error: 'Not Found',
	});
});
