const connectionMySQL = require("../connectionMySQL");

function getUsers() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users";
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function createUser(userName) {
  return new Promise((resolve, reject) => {
    if (!userName) return reject(new Error("Username is required"));

    const sql = "INSERT INTO users (userName) VALUES (?)";
    connectionMySQL.query(sql, [userName], (err, result) => {
      if (err) reject(err);
      else resolve({ userId: result.insertId, userName });
    });
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE userId = ?";
    connectionMySQL.query(sql, [id], (err, rows) => {
      if (err) reject(err);
      else if (rows.length === 0) reject(new Error("User not found"));
      else resolve(rows[0]);
    });
  });
}

function updateUser(id, userName) {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET userName = ? WHERE userId = ?";
    connectionMySQL.query(sql, [userName, id], (err, result) => {
      if (err) reject(err);
      else if (result.affectedRows === 0) reject(new Error("User not found"));
      else resolve({ userId: parseInt(id), userName });
    });
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM users WHERE userId = ?";
    connectionMySQL.query(sql, [id], (err, result) => {
      if (err) reject(err);
      else if (result.affectedRows === 0) reject(new Error("User not found"));
      else resolve({ message: "User deleted" });
    });
  });
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
