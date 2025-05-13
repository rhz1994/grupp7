const express = require("express");
const router = express.Router();
const countryInfoController = require("../controllers/countryInfoController");

router.get("/api/countryInfo", countryInfoController.getAllCountryInfo);
router.get(
  "/api/countryInfo/:country",
  countryInfoController.getCountryInfoByName
);
router.post("/api/countryInfo", countryInfoController.createCountryInfo);
router.put("/api/countryInfo", countryInfoController.updateCountryInfo);
router.delete(
  "/api/countryInfo/:country",
  countryInfoController.deleteCountryInfo
);

module.exports = router;
