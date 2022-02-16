const { StatusCodes: { NO_CONTENT } } = require('http-status-codes');
const { deleteTasks } = require('../../services');

module.exports = async (req, res) => {
  const result = await deleteTasks(req.params.id);

  return res.status(NO_CONTENT).json(result);
};
