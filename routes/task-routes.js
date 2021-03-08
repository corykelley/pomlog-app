const tasksController = require('../controllers/task-controller');
const tasksRouter = require('express').Router();

tasksRouter.get('/', tasksController.index);

module.exports = tasksRouter;
