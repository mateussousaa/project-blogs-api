const Joi = require('joi');
const mapError = require('../utils/errorMap');

const verifyUserSchema = (req, res, next) => {
  const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { error } = userSchema.validate(req.body);

  if (error) {
    const { message } = error.details[0];
    return res
      .status(mapError('USER_SCHEMA_INVALID'))
      .json({ message });
  } 
  
  next();
};

module.exports = verifyUserSchema;