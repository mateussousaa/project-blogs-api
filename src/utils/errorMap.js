const errorMap = {
  INVALID_FIELDS: 400,
  USER_ALREADY_REGISTERED: 409,
  USER_DOESNT_EXIST: 404,
  CATEGORY_SCHEMA_INVALID: 400,
  INVALID_TOKEN: 401,
  FIELDS_ARE_MISSING: 400,
  USER_SCHEMA_INVALID: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = mapError;