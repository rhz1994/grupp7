const Continent = require('../models/mongodb/continent');

// READ: Get all continents
const getContinents = async () => {
  try {
    // Find all continents in the database
    const continents = await Continent.find();
    return continents;
  } catch (error) {
    throw new Error('Failed to fetch continents: ' + error.message);
  }
};

// READ: Get a single continent by ID
const getContinent = async (id) => {
  try {
    // Find a continent by its MongoDB _id
    const continent = await Continent.findById(id);
    if (!continent) {
      throw new Error('Continent not found');
    }
    return continent;
  } catch (error) {
    throw new Error('Failed to fetch continent: ' + error.message);
  }
};

// CREATE: Add a new continent
const createContinent = async (continentName) => {
  try {
    // Create a new continent document
    const newContinent = new Continent({ continentName });
    // Save it to the database
    await newContinent.save();
  } catch (error) {
    throw new Error('Failed to create continent: ' + error.message);
  }
};

// UPDATE: Update a continent by ID
const updateContinent = async (continentName, continentId) => {
  try {
    // Find and update the continent
    const updatedContinent = await Continent.findByIdAndUpdate(
      continentId,
      { continentName },
      { new: true }
    );
    if (!updatedContinent) {
      throw new Error('Continent not found');
    }
  } catch (error) {
    throw new Error('Failed to update continent: ' + error.message);
  }
};

// DELETE: Delete a continent by ID
const deleteContinent = async (id) => {
  try {
    // Find and delete the continent
    const deletedContinent = await Continent.findByIdAndDelete(id);
    if (!deletedContinent) {
      throw new Error('Continent not found');
    }
  } catch (error) {
    throw new Error('Failed to delete continent: ' + error.message);
  }
};

module.exports = {
  getContinents,
  getContinent,
  createContinent,
  updateContinent,
  deleteContinent
};



// const connectionMySQL = require("../connectionMySQL");

// function getContinents() {
//   return new Promise((resolve, reject) => {
//     let sql = "SELECT * FROM continents";
//     connectionMySQL.query(sql, (err, rows) => {
//       if (err) reject(err);
//       else resolve(rows);
//     });
//   });
// }

// function getContinent(id) {
//   return new Promise((resolve, reject) => {
//     let sql = "SELECT * FROM continents WHERE continentId = ?";
//     connectionMySQL.query(sql, [id], (err, rows) => {
//       if (err) reject(err);
//       else resolve(rows);
//     });
//   });
// }

// function createContinent(continentName) {
//   return new Promise((resolve, reject) => {
//     let sql = 'INSERT INTO continents (continentName) VALUES (?)';
//     let params = [continentName]

//     connectionMySQL.query(sql, params, (err) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve();
//       }
//     })
//   })
// }

// function updateContinent(continentName, continentId) {
//   return new Promise((resolve, reject) => {
//     let sql = 'UPDATE continents SET continentName = ? WHERE continentId = ?';
//     let params = [continentName, continentId];

//     connectionMySQL.query(sql, params, (err) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve();
//       }
//     })
//   })
// }

// function deleteContinent(id) {
//   return new Promise((resolve, reject) => {
//     let sql = 'DELETE FROM continents WHERE continentId = ?';

//     connectionMySQL.query(sql, [id], (err) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve();
//       }
//     })
//   })
// }

// module.exports = {
//   getContinents,
//   getContinent,
//   createContinent,
//   updateContinent,
//   deleteContinent
// };
