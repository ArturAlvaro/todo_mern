const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await connect();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
};
