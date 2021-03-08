const Task = require('../models/Task');

const tasksController = {
	index(req, res, next) {
		Task.getAll()
			.then((tasks) => {
				res.json({
					message: 'ok',
					tasks,
				});
			})
			.catch(next);
	},

	create(req, res, next) {
		new Task({
			title: req.body.title,
			description: req.body.description,
			time_limit: req.body.time_limit,
			start_date: req.body.start_date,
			sprints: req.body.sprints,
		})
			.save()
			.then((task) => {
				res.status(201).json({
					message: 'Task was successfully created!',
					task,
				});
			})
			.catch(next);
	},
};

module.exports = tasksController;
