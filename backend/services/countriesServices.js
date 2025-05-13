// services/countriesServices.js
// Import the Country model
const Country = require('../models/mongodb/country');

// READ: Get all countries
const getCountries = async () => {
    try {
        // Find all countries and populate continentId to get continentName
        const countries = await Country.find().populate('continentId', 'continentName');
        return countries;
    } catch (error) {
        throw new Error('Failed to fetch countries: ' + error.message);
    }
};

// CREATE: Add a new country
const addCountry = async (countryName, countryCapital, countryPopulation, continentId) => {
    try {
        // Create a new country document
        const newCountry = new Country({
            countryName,
            countryCapital,
            countryPopulation,
            continentId,
            flagURL: '' // Default empty flagURL
        });
        // Save it to the database
        await newCountry.save();
    } catch (error) {
        throw new Error('Failed to create country: ' + error.message);
    }
};

// UPDATE: Update a country by ID
const updateCountries = async (countryId, countryName, countryCapital, countryPopulation, continentId) => {
    try {
        // Find and update the country
        const updatedCountry = await Country.findByIdAndUpdate(
            countryId,
            { countryName, countryCapital, countryPopulation, continentId },
            { new: true } // Return the updated document
        );
        if (!updatedCountry) {
            throw new Error('Country not found');
        }
    } catch (error) {
        throw new Error('Failed to update country: ' + error.message);
    }
};

// DELETE: Delete a country by ID
const deleteCountry = async (countryId) => {
    try {
        // Find and delete the country
        const deletedCountry = await Country.findByIdAndDelete(countryId);
        if (!deletedCountry) {
            throw new Error('Country not found');
        }
    } catch (error) {
        throw new Error('Failed to delete country: ' + error.message);
    }
};

module.exports = {
    getCountries,
    addCountry,
    updateCountries,
    deleteCountry
};






// const connectionMySQL = require("../connectionMySQL");

// // CREATE
// function addCountry(countryName, countryCapital, countryPopulation) {
//     return new Promise((resolve, reject) => {
//         let sql = 'INSERT INTO countries (countryName, countryCapital, countryPopulation) VALUES (?,?,?)';
//         let params = [countryName, countryCapital, countryPopulation];

//         connectionMySQL.query(sql, params, (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve();
//         });
//     });
// }

// // READ
// function getCountries() {
//     return new Promise((resolve, reject) => {
//         let sql = "SELECT countryId, countryName, countryCapital, countryPopulation, flagURL, continentName FROM countries INNER JOIN continents ON countries.continentId = continents.continentId;";
//         connectionMySQL.query(sql, (err, rows) => {
//             if (err) reject(err);
//             else resolve(rows);
//         });
//     });
// }

// // UPDATE
// function updateCountries(countryId, countryName, countryCapital, countryPopulation) {
//     return new Promise((resolve, reject) => {
//         let sql = 'UPDATE countries SET countryName = ?, countryCapital = ?, countryPopulation = ? WHERE countryId = ?';
//         let params = [countryName, countryCapital, countryPopulation, countryId];

//         connectionMySQL.query(sql, params, (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve();
//         });
//     });
// }

// // DELETE
// function deleteCountry(countryId) {
//     return new Promise((resolve, reject) => {
//         let sql = 'DELETE FROM countries WHERE countryId = ?';

//         connectionMySQL.query(sql, [countryId], (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve();
//         });
//     });
// }

// module.exports = {
//     getCountries,
//     addCountry,
//     updateCountries,
//     deleteCountry
// };
