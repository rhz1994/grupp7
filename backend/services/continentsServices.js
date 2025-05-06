const connectionMySQL = require("../connectionMySQL");

function getContinents() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM continents";
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function getContinent(id) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM continents WHERE continentId = ?";
    connectionMySQL.query(sql, [id], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function createContinent(continentName) {
  return new Promise((resolve, reject) => {
    let sql = 'INSERT INTO continents (continentName) VALUES (?)';
    let params = [continentName]

    connectionMySQL.query(sql, params, (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve();
      }
    })
  })
}

function updateContinent(continentName, continentId) {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE continents SET continentName = ? WHERE continentId = ?';
    let params = [continentName, continentId];

    connectionMySQL.query(sql, params, (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve();
      }
    })
  })
}

function deleteContinent(id) {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM continents WHERE continentId = ?';

    connectionMySQL.query(sql, [id], (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve();
      }
    })
  })
}

module.exports = {
  getContinents,
  getContinent,
  createContinent,
  updateContinent,
  deleteContinent
};
