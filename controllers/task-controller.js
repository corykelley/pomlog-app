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
};

module.exports = tasksController;
