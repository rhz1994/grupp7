const connectionMySQL = require("../connectionMySQL");

function getCountries() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM countries";
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
module.exports = {
  getCountries,
};