const placesVisitedService = require("../services/placesVisitedServices");

exports.getPlacesVisited = async (req, res) => {
  try {
    const placesVisited = await placesVisitedService.getPlacesVisited();
    res.json({ placesVisited });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
