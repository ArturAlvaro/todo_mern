const express = require('express');
const { readTasks } = require('../controllers');
const errorController = require('../controllers/errorController');

const app = express();
app.use(express.json());

app.use('/tasks', readTasks);
app.use(errorController);

module.exports = app;
