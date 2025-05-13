const CountryInfo = require("../models/countryInfoModel");

exports.getAllCountryInfo = async (req, res) => {
  try {
    const allCountries = await CountryInfo.find();

    if (allCountries.length === 0) {
      return res.status(404).json({ message: "No countries found" });
    }

    return res.status(200).json(allCountries);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getCountryInfoByName = async (req, res) => {
  const { country } = req.params;
  try {
    const countryInfo = await CountryInfo.findOne({ country: country });

    if (!countryInfo) {
      return res.status(404).json({ message: "Country not found" });
    }

    return res.status(200).json(countryInfo);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createCountryInfo = async (req, res) => {
  const { country, description } = req.body;

  try {
    const existingCountry = await CountryInfo.findOne({ country: country });
    if (existingCountry) {
      return res.status(400).json({ message: "Country already exists" });
    }

    const newCountry = new CountryInfo({
      country,
      description,
    });

    await newCountry.save();

    return res.status(201).json(newCountry);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateCountryInfo = async (req, res) => {
  const { country } = req.params;
  const { description } = req.body;

  try {
    const updatedCountry = await CountryInfo.findOneAndUpdate(
      { country: country },
      { description },
      { new: true }
    );

    if (!updatedCountry) {
      return res.status(404).json({ message: "Country not found" });
    }

    return res.status(200).json(updatedCountry);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteCountryInfo = async (req, res) => {
  const { country } = req.params;

  try {
    const deletedCountry = await CountryInfo.findOneAndDelete({
      country: country,
    });

    if (!deletedCountry) {
      return res.status(404).json({ message: "Country not found" });
    }

    return res
      .status(200)
      .json({ message: `${country} has been deleted`, deletedCountry });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
