const express = require('express');
const rescue = require('express-rescue');
const { createTasks, readTasks } = require('../../controllers');

const taskRouter = express.Router();

taskRouter.post('/', rescue(createTasks));
taskRouter.get('/', rescue(readTasks));

module.exports = taskRouter;
