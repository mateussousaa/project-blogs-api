const errorMap = {
  INVALID_FIELDS: 400,
  USER_ALREADY_REGISTERED: 409,
  USER_DOESNT_EXIST: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = mapError;