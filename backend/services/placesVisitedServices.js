
const PlaceVisited = require('../models/mongodb/placeVisited');

// READ: Get all places visited
const getPlacesVisited = async () => {
  try {
    // Find all documents in the placesVisited collection
    const placesVisited = await PlaceVisited.find()
      .populate('userId', 'userName')
      .populate('countryId', 'countryName flagURL');
    return placesVisited;
  } catch (error) {
    throw new Error('Failed to fetch places visited: ' + error.message);
  }
};

// READ: Get places visited by ID
const getPlacesVisitedByUser = async (id) => {
  try {
    // Find places visited by userId, sorted by yearVisited
    const placesVisited = await PlaceVisited.find({ userId: id })
      .populate('countryId', 'countryName flagURL')
      .sort({ yearVisited: -1 }); // Sort by yearVisited (newest first)
    return placesVisited;
  } catch (error) {
    throw new Error('Failed to fetch places visited by user: ' + error.message);
  }
};

// READ: Get a single place visited by ID
const getPlaceVisitedById = async (id) => {
  try {
    // Find a place visited by its _id
    const placeVisited = await PlaceVisited.findById(id)
      .populate('userId', 'userName')
      .populate('countryId', 'countryName flagURL');
    if (!placeVisited) {
      throw new Error('Place visited not found');
    }
    return placeVisited;
  } catch (error) {
    throw new Error('Failed to fetch place visited: ' + error.message);
  }
};

// CREATE: Add a new place visited
const addPlaceVisited = async (yearVisited, rating, notes, userId, countryId, imageURL) => {
  try {
    // Create a new place visited document
    const newPlaceVisited = new PlaceVisited({
      yearVisited,
      rating,
      notes: notes || '', // Default to empty string if notes is null
      userId,
      countryId,
      imageURL: imageURL || '' // Default to empty string if imageURL is null
    });
    // Save it to the database
    await newPlaceVisited.save();
  } catch (error) {
    throw new Error('Failed to create place visited: ' + error.message);
  }
};

// UPDATE: Update a place visited by ID
const updatePlaceVisited = async (yearVisited, rating, notes, userId, countryId, placeVisitedId) => {
  try {
    // Find and update the place visited
    const updatedPlaceVisited = await PlaceVisited.findByIdAndUpdate(
      placeVisitedId,
      {
        yearVisited,
        rating,
        notes: notes || '',
        userId,
        countryId,
        imageURL: '' // Update imageURL if provided, else keep empty
      },
      { new: true } // Return the updated document
    );
    if (!updatedPlaceVisited) {
      throw new Error('Place visited not found');
    }
  } catch (error) {
    throw new Error('Failed to update place visited: ' + error.message);
  }
};

// DELETE: Delete a place visited by ID
const deletePlaceVisited = async (id) => {
  try {
    // Find and delete the place visited
    const deletedPlaceVisited = await PlaceVisited.findByIdAndDelete(id);
    if (!deletedPlaceVisited) {
      throw new Error('Place visited not found');
    }
  } catch (error) {
    throw new Error('Failed to delete place visited: ' + error.message);
  }
};

module.exports = {
  getPlacesVisited,
  getPlacesVisitedByUser,
  getPlaceVisitedById,
  addPlaceVisited,
  updatePlaceVisited,
  deletePlaceVisited
};

// function getPlacesVisited() {
//   return new Promise((resolve, reject) => {
//     let sql = "SELECT * FROM placesVisited";
//     connectionMySQL.query(sql, (err, rows) => {
//       if (err) reject(err);
//       else resolve(rows);
//     });
//   });
// }

// function getPlacesVisitedByUser(id) {
//   return new Promise((resolve, reject) => {
//     let sql = `SELECT placesVisited.placeVisitedId, placesVisited.yearVisited, placesVisited.rating, placesVisited.notes, placesVisited.imageURL, countries.countryName, countries.flagURL
// FROM placesVisited
// INNER JOIN countries ON placesVisited.countryId = countries.countryId WHERE userId = ? ORDER BY placesVisited.yearVisited DESC`;
//     connectionMySQL.query(sql, [id], (err, rows) => {
//       if (err) reject(err);
//       else resolve(rows);
//     });
//   });
// }

// function getPlaceVisitedById(id) {
//   return new Promise((resolve, reject) => {
//     let sql = "SELECT * FROM placesVisited WHERE placeVisitedId = ?";
//     connectionMySQL.query(sql, [id], (err, rows) => {
//       if (err) reject(err);
//       else resolve(rows);
//     });
//   });
// }

// function addPlaceVisited(yearVisited, rating, notes, userId, countryId, imageURL) {
//   return new Promise((resolve, reject) => {
//     let sql = `INSERT INTO placesVisited (yearVisited, rating, notes, userId, countryId, imageURL) VALUES (?,?,?,?,?,?)`;
//     let params = [yearVisited, rating, notes, userId, countryId, imageURL];
//     connectionMySQL.query(sql, params, (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// }

// function updatePlaceVisited(
//   yearVisited,
//   rating,
//   notes,
//   userId,
//   countryId,
//   placeVisitedId
// ) {
//   return new Promise((resolve, reject) => {
//     let sql = `UPDATE placesVisited SET yearVisited = ?, rating = ?, notes = ?, userId = ?, countryId = ? WHERE placeVisitedId = ? `;
//     let params = [
//       yearVisited,
//       rating,
//       notes,
//       userId,
//       countryId,
//       placeVisitedId,
//     ];
//     connectionMySQL.query(sql, params, (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// }

// function deletePlaceVisited(id) {
//   return new Promise((resolve, reject) => {
//     let sql = `DELETE FROM placesVisited WHERE placeVisitedID = ?`;
//     connectionMySQL.query(sql, [id], (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// }

// module.exports = {
//   getPlacesVisited,
//   getPlacesVisitedByUser,
//   getPlaceVisitedById,
//   addPlaceVisited,
//   updatePlaceVisited,
//   deletePlaceVisited,
// };
