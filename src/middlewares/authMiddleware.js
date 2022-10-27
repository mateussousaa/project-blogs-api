const mapError = require('../utils/errorMap');
const jwt = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(mapError('INVALID_TOKEN'))
      .json({ message: 'Token not found' }); 
  }

  const { type, message } = jwt.validateToken(authorization);
  if (type) {
    return res
      .status(mapError('INVALID_TOKEN'))
      .json({ message });
  }

  req.user = message;
  next();
};

module.exports = authMiddleware;