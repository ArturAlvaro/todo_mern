const connect = require('../connection');

module.exports = async () => {
  const db = await connect();
  const result = await db
    .collection('tasks')
    .find().toArray();

  return result;
};
