const { userService } = require('../services'); 
const mapError = require('../utils/errorMap');

const insertUser = async (req, res) => {
  const { type, message } = await userService.insertUser(req.body);

  if (type) return res.status(mapError(type)).json({ message });

  res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.getUserById(Number(id));

  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  await userService.deleteUser(Number(id));
  res.status(204).json();
};

module.exports = { insertUser, getUsers, getUserById, deleteUser };