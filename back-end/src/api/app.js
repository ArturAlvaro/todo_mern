const express = require('express');
const cors = require('cors');
const errorController = require('../controllers/errorController');
const taskRouter = require('../routes/tasks');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/tasks', taskRouter);
app.use(errorController);

module.exports = app;
