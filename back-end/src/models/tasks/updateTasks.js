const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (id, task, date) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  await db.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { task, date } },
  );

  return {
    _id: id,
    task,
    date,
  };
};
