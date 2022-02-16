const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await connect();
  const result = db.collection('tasks').findOne({ _id: new ObjectId(id) });

  if (!result) return null;

  return result;
};
