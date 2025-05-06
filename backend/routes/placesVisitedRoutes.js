const express = require("express");
const router = express.Router();
const placesVisitedController = require("../controllers/placesVisitedController");

router.get("/api/placesVisited", placesVisitedController.getPlacesVisited);

router.get(
  "/api/placesVisitedByUser/:id",
  placesVisitedController.getPlacesVisitedByUser
);

router.get(
  "/api/placesVisited/:id",
  placesVisitedController.getPlaceVisitedById
);

router.post("/api/placesVisited", placesVisitedController.addPlaceVisited);

router.put("/api/placesVisited", placesVisitedController.updatePlaceVisited);

router.delete(
  "/api/placesVisited/:id",
  placesVisitedController.deletePlaceVisited
);
module.exports = router;
