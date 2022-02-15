const { StatusCodes: { OK } } = require('http-status-codes');
const { readTasks } = require('../../services');

module.exports = async (_req, res) => {
  const result = await readTasks();

  return res.status(OK).json(result);
};
