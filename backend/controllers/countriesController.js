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
