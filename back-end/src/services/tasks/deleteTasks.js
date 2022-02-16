const { readTaskById } = require('../../models');
const { notFound } = require('../../Error/ApiError');
const { deleteTasks } = require('../../models');

module.exports = async (id) => {
  const find = await readTaskById(id);
  if (!find) return notFound('task not found');

  const result = await deleteTasks(id);
  return result;
};
