const connect = require('../connection');

module.exports = async (task, date, status) => {
  const db = await connect();
  const result = await db
    .collection('tasks')
    .insertOne({ task, date, status });

  return { id: result.insertedId, task, date, status };
};
