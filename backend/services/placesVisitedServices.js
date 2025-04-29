const connectionMySQL = require("../connectionMySQL");

function getPlacesVisited() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM placesVisited";
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
module.exports = {
  getPlacesVisited,
};
