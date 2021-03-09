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

	show(req, res, next) {
		Task.getById(req.params.id)
			.then((task) => {
				res.json({
					message: 'ok',
					task,
				});
				console.log(task);
			})
			.catch(next);
	},

	// TODO: DETERMINE WHAT NEEDS TO BE UPDATED
	update(req, res, next) {
		Task.getById(req.params.id)
			.then((task) => {
				task.update({
					title: req.body.title,
				});
			})
			.then((task) => {
				res.json({
					message: 'Task updated!',
					task,
				});
			})
			.catch(next);
	},

	delete(req, res, next) {
		Task.getById(req.params.id)
			.then((task) => task.delete())
			.then(() => {
				res.json({
					message: 'Task deleted!',
				});
			})
			.catch(next);
	},
};

module.exports = tasksController;
