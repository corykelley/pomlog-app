const tasksController = require('../controllers/task-controller');
const tasksRouter = require('express').Router();

tasksRouter.get('/', tasksController.index);
tasksRouter.post('/new', tasksController.create);
// tasksRouter.update('/:id', tasksController.update);
tasksRouter.delete('/:id([0-9]+)', tasksController.delete);

module.exports = tasksRouter;
