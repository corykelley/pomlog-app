const express = require('express');
const app = express();
const morgan = require('morgan');

const tasksRouter = require('./routes/task-routes');

app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use('/api/tasks', tasksRouter);

// Error handling
app.use('*', (req, res) => {
	res.status(404).send({
		error: 'Not Found',
	});
});

app.use((err, req, res, next) => {
	console.log(err);
	res.status(err.status || 500).send({
		err,
		message: err.message,
		stack: err.stack,
	});
});
