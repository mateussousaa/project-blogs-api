const mapError = require('../utils/errorMap');

const verifyLoginFields = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(mapError('FIELDS_ARE_MISSING'))
      .json({ message: 'Some required fields are missing' }); 
  }

  next();
};

module.exports = verifyLoginFields;