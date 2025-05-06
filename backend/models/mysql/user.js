const { mysqlPool } = require('../../config/db');

const createUserTable = async () => {
  try {
    await mysqlPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        userName VARCHAR(50) NOT NULL UNIQUE
      )
    `);
    console.log('Users table created or already exists');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
};

module.exports = { createUserTable };