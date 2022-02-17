const { format } = require('date-fns');

module.exports = () => {
  const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');
  return timestamp;
};
