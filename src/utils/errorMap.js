const errorMap = {
  INVALID_FIELDS: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = mapError;