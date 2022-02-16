const { StatusCodes: { OK } } = require('http-status-codes');
const { updateTasks } = require('../../services');

module.exports = async (req, res) => {
  const result = await updateTasks(req.params.id, req.body.task);

  return res.status(OK).json(result);
};
