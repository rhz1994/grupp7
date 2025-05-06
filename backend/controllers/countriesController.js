const countriesService = require("../services/countriesServices");

exports.getCountries = async (req, res) => {
  try {
    const countries = await countriesService.getCountries();
    res.json({ countries });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.addCountry = async (req, res) => {
    const { countryName, countryCapital, countryPopulation } = req.body;
    try {
      await countriesService.addCountry(countryName, countryCapital, countryPopulation);
      res.status(201).json({ message: "Country added" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateCountries = async (req, res) => {
    const { countryId, countryName, countryCapital, countryPopulation } = req.body;
    try {
      await countriesService.updateCountries(countryId, countryName, countryCapital, countryPopulation);
      res.json({ message: "Country updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteCountry = async (req, res) => {
    const { countryId } = req.params;
    try {
      await countriesService.deleteCountry(countryId);
      res.json({ message: "Country deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };