const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countriesController");

router.get("/api/countries", countriesController.getCountries);

module.exports = router;
