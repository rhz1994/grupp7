// controllers/countriesController.js
const countriesService = require('../services/countriesServices');

// READ: Get all countries
exports.getCountries = async (req, res) => {
  try {
    const countries = await countriesService.getCountries();
    res.json({ countries });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};

// CREATE: Add a new country
exports.addCountry = async (req, res) => {
  const { countryName, countryCapital, countryPopulation, continentId } = req.body;
  // Validate required fields
  if (!countryName || !countryCapital || !countryPopulation || !continentId) {
    return res.status(400).json({
      success: false,
      error: 'All fields (countryName, countryCapital, countryPopulation, continentId) are required'
    });
  }
  try {
    await countriesService.addCountry(countryName, countryCapital, countryPopulation, continentId);
    res.status(201).json({ message: 'Country added' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE: Update a country
exports.updateCountries = async (req, res) => {
  const { countryId, countryName, countryCapital, countryPopulation, continentId } = req.body;
  // Validate required fields
  if (!countryId || !countryName || !countryCapital || !countryPopulation || !continentId) {
    return res.status(400).json({
      success: false,
      error: 'All fields (countryId, countryName, countryCapital, countryPopulation, continentId) are required'
    });
  }
  try {
    await countriesService.updateCountries(countryId, countryName, countryCapital, countryPopulation, continentId);
    res.json({ message: 'Country updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE: Delete a country
exports.deleteCountry = async (req, res) => {
  const { countryId } = req.params;
  try {
    await countriesService.deleteCountry(countryId);
    res.json({ message: 'Country deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};