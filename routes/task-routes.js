const tasksController = require('../controllers/task-controller');
const tasksRouter = require('express').Router();

tasksRouter.get('/', tasksController.index);
tasksRouter.post('/new', tasksController.create);
tasksRouter.put('/:id([0-9]+)', tasksController.update);
tasksRouter.delete('/:id([0-9]+)', tasksController.delete);

module.exports = tasksRouter;
