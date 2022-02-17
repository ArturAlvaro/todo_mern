const { createTasks } = require('../../models');
const { badRequest } = require('../../Error/ApiError');
const validate = require('../../validations/validate');
const getDate = require('../../helper');

module.exports = async (body) => {
  const error = validate(body);
  if (error) return badRequest(error);

  const actualDate = getDate();
  const status = 'Pendente';

  const { task } = body;

  const result = await createTasks(task, actualDate, status);
  return result;
};
