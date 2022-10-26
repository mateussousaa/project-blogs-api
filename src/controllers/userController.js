const { userService } = require('../services'); 
const mapError = require('../utils/errorMap');

const insertUser = async (req, res) => {
  const { type, message } = await userService.insertUser(req.body);

  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json({ token: message });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

module.exports = { insertUser, getUsers };