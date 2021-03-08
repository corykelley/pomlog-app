const tasksController = require('../controllers/task-controller');
const tasksRouter = require('express').Router();

tasksRouter.get('/', tasksController.index);
tasksRouter.post('/new', tasksController.create);

module.exports = tasksRouter;
