const { User } = require('../models');
const jwt = require('../utils/jwt');

const insertUser = async (userInfo) => {
  const { displayName, email, password, image } = userInfo;
  const user = await User.findOne({ where: { email: userInfo.email } });

  if (user) {
    return { 
      type: 'USER_ALREADY_REGISTERED',
      message: 'User already registered',
    };
  }

  await User.create({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = userInfo;
  const token = jwt.createToken(userWithoutPassword);

  return { type: null, message: token };
};

module.exports = { insertUser };