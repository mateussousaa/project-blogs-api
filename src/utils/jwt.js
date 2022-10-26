require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  console.log(token);
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return { type: null, message: data };
  } catch (e) {
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

module.exports = { createToken, validateToken };