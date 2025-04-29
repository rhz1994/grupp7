const express = require("express");
const router = express.Router();
const placesVisitedController = require("../controllers/placesVisitedController");

router.get("/api/placesVisited", placesVisitedController.getPlacesVisited);

module.exports = router;
