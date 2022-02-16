const { StatusCodes: { CREATED } } = require('http-status-codes');
const { createTasks } = require('../../services');

module.exports = async (req, res) => {
  const result = await createTasks(req.body);
  return res.status(CREATED).json(result);
};
