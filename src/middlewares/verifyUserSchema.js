const Joi = require('joi');

const verifyUserSchema = (req, res, next) => {
  const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { error } = userSchema.validate(req.body);

  console.log(error);
  if (error) {
    const { message } = error.details[0];
    return res
      .status(400)
      .json({ message });
  } 
  
  next();
};

module.exports = verifyUserSchema;