const { readTaskById, updateTasks } = require('../../models');
const { notFound } = require('../../Error/ApiError');
const getDate = require('../../helper');

module.exports = async (id, task) => {
  const findTask = await readTaskById(id);
  if (!findTask) return notFound('task not found');

  const actualDate = getDate(new Date());
  const result = await updateTasks(id, task, actualDate);

  return result;
};
