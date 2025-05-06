const asyncHandler = require('express-async-handler');
const { mysqlPool } = require('../config/db');
const UserMongo = require('../models/mongodb/user');

// MySQL CRUD
const createUserMySQL = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(400);
    throw new Error('Username is required');
  }

  const [result] = await mysqlPool.query(
    'INSERT INTO users (userName) VALUES (?)',
    [userName]
  );
  res.status(201).json({ userId: result.insertId, userName });
});

const getUsersMySQL = asyncHandler(async (req, res) => {
  const [rows] = await mysqlPool.query('SELECT * FROM users');
  res.json(rows);
});

const getUserMySQL = asyncHandler(async (req, res) => {
  const [rows] = await mysqlPool.query('SELECT * FROM users WHERE userId = ?', [req.params.id]);
  if (rows.length === 0) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(rows[0]);
});

const updateUserMySQL = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  const [result] = await mysqlPool.query(
    'UPDATE users SET userName = ? WHERE userId = ?',
    [userName, req.params.id]
  );
  if (result.affectedRows === 0) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json({ userId: parseInt(req.params.id), userName });
});

const deleteUserMySQL = asyncHandler(async (req, res) => {
  const [result] = await mysqlPool.query('DELETE FROM users WHERE userId = ?', [req.params.id]);
  if (result.affectedRows === 0) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json({ message: 'User deleted' });
});

// MongoDB CRUD
const createUserMongo = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(400);
    throw new Error('Username is required');
  }

  const user = await UserMongo.create({ userName });
  res.status(201).json(user);
});

const getUsersMongo = asyncHandler(async (req, res) => {
  const users = await UserMongo.find();
  res.json(users);
});

const getUserMongo = asyncHandler(async (req, res) => {
  const user = await UserMongo.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(user);
});

const updateUserMongo = asyncHandler(async (req, res) => {
  const { userName } = req.body;
  const user = await UserMongo.findByIdAndUpdate(
    req.params.id,
    { userName },
    { new: true }
  );
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(user);
});

const deleteUserMongo = asyncHandler(async (req, res) => {
  const user = await UserMongo.findByIdAndDelete(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json({ message: 'User deleted' });
});

module.exports = {
  createUserMySQL,
  getUsersMySQL,
  getUserMySQL,
  updateUserMySQL,
  deleteUserMySQL,
  createUserMongo,
  getUsersMongo,
  getUserMongo,
  updateUserMongo,
  deleteUserMongo
};