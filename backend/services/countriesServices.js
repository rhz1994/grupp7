const connectionMySQL = require("../connectionMySQL");

// CREATE
function addCountry(countryName, countryCapital, countryPopulation) {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO countries (countryName, countryCapital, countryPopulation) VALUES (?,?,?)';
        let params = [countryName, countryCapital, countryPopulation];

        connectionMySQL.query(sql, params, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

// READ
function getCountries() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM countries";
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// UPDATE
function updateCountries(countryId, countryName, countryCapital, countryPopulation) {
    return new Promise((resolve, reject) => {
        let sql = 'UPDATE countries SET countryName = ?, countryCapital = ?, countryPopulation = ?, WHERE countryId = ?';
        let params = [countryName, countryCapital, countryPopulation, countryId];

        connectionMySQL.query(sql, params, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

// DELETE
function deleteCountry(countryId) {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM countries WHERE countryId = ?';

        connectionMySQL.query(sql, [countryId], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

module.exports = {
  getCountries,
};