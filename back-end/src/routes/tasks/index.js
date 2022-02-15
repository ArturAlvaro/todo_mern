const express = require('express');
const rescue = require('express-rescue');
const taskController = require('../../controllers/tasks/readTasks');

const taskRouter = express.Router();

taskRouter.get('/', rescue(taskController));

module.exports = taskRouter;
