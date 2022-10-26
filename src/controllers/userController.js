const { userService } = require('../services'); 
const mapError = require('../utils/errorMap');

const insertUser = async (req, res) => {
  const { type, message } = await userService.insertUser(req.body);

  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json({ token: message });
};

module.exports = { insertUser };