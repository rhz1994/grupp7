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

function getPlacesVisitedByUser(id) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT placesVisited.yearVisited, placesVisited.rating, placesVisited.notes, placesVisited.imageURL, countries.countryName, countries.flagURL
FROM placesVisited
INNER JOIN countries ON placesVisited.countryId = countries.countryId WHERE userId = ? ORDER BY placesVisited.yearVisited DESC`;
    connectionMySQL.query(sql, [id], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function getPlaceVisitedById(id) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM placesVisited WHERE placeVisitedId = ?";
    connectionMySQL.query(sql, [id], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function addPlaceVisited(yearVisited, rating, notes, userId, countryId) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO placesVisited (yearVisited, rating, notes, userId, countryId) VALUES (?,?,?,?,?)`;
    let params = [yearVisited, rating, notes, userId, countryId];
    connectionMySQL.query(sql, params, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function updatePlaceVisited(
  yearVisited,
  rating,
  notes,
  userId,
  countryId,
  placeVisitedId
) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE placesVisited SET yearVisited = ?, rating = ?, notes = ?, userId = ?, countryId = ? WHERE placeVisitedId = ? `;
    let params = [
      yearVisited,
      rating,
      notes,
      userId,
      countryId,
      placeVisitedId,
    ];
    connectionMySQL.query(sql, params, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function deletePlaceVisited(id) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM placesVisited WHERE placeVisitedID = ?`;
    connectionMySQL.query(sql, [id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
  getPlacesVisited,
  getPlacesVisitedByUser,
  getPlaceVisitedById,
  addPlaceVisited,
  updatePlaceVisited,
  deletePlaceVisited,
};
