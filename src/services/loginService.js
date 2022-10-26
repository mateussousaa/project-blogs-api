const { User } = require('../models');
const jwt = require('../utils/jwt');

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  }

  const { password: _, ...userInfo } = user.dataValues;
  
  const token = jwt.createToken(userInfo);
  
  return { type: null, message: token };
};

module.exports = { validateLogin };