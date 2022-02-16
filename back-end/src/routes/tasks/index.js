const express = require('express');
const rescue = require('express-rescue');
const { createTasks, readTasks, updateTasks, deleteTasks } = require('../../controllers');

const taskRouter = express.Router();

taskRouter.put('/:id', rescue(updateTasks));
taskRouter.delete('/:id', rescue(deleteTasks));
taskRouter.post('/', rescue(createTasks));
taskRouter.get('/', rescue(readTasks));

module.exports = taskRouter;
