const connect = require('../connection');

module.exports = async (task) => {
  const db = await connect();
  const result = await db
    .collection('tasks')
    .insertOne({ task });

  return { _id: result.insertedId, task };
};
