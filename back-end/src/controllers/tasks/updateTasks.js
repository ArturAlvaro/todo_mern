const { StatusCodes: { OK } } = require('http-status-codes');
const { updateTasks } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;

  const result = await updateTasks(id, task, status);

  return res.status(OK).json(result);
};
