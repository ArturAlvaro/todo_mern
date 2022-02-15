const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async ({ id, task }) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  await db.collection('tasks').updateOne(
    { _id: id },
    { $set: { task } },
  );

  return {
    _id: id,
    task,
  };
};
