const connect = require('../connection');

module.exports = async (task, date) => {
  const db = await connect();
  const result = await db
    .collection('tasks')
    .insertOne({ task, date });

  return { id: result.insertedId, task, date };
};
