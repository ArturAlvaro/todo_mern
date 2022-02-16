const joi = require('joi');

const schema = joi.object().keys({
  task: joi.string().empty(false).required().max(200),
});

module.exports = (task) => {
  const { error } = schema.validate(task);

  if (error) {
    return error.details[0].message;
  }

  return false;
};
