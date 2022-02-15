const { readTasks } = require('../../models');

module.exports = async () => {
  const result = await readTasks();

  return result;
};
