const connectionMySQL = require('../connectionMySql');

function getContinents() {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM continents';
    connectionMySQL.query(sql, (err, rows) => {
      if (err)
        reject(err);
      else
        resolve(rows);
    });
  });
}

function getContinent(id) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM continents WHERE continentId = ?';
    connectionMySQL.query(sql, [id], (err, rows) => {
      if (err)
        reject(err);
      else
        resolve(rows);
    });
  });
}

module.exports = {
  getContinents,
  getContinent
};
