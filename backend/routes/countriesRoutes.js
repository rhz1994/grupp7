const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countriesController");

router.get("/api/countries", countriesController.getCountries);
router.post("/api/countries", countriesController.addCountry);
router.put("/api/countries", countriesController.updateCountries);
router.delete("/api/countries/:countryId", countriesController.deleteCountry);

module.exports = router;