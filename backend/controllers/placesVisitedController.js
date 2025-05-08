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

exports.getPlacesVisitedByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const placesVisitedByUser =
      await placesVisitedService.getPlacesVisitedByUser(id);
    res.json({ placesVisitedByUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getPlaceVisitedById = async (req, res) => {
  const { id } = req.params;

  try {
    const placeVisited = await placesVisitedService.getPlaceVisitedById(id);
    res.json({ placeVisited });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.addPlaceVisited = async (req, res) => {
  const { yearVisited, rating, notes, userId, countryId, imageURL } = req.body;

  if (!yearVisited || !rating || !userId || !countryId) {
    return res.status(400).json({
      success: false,
      error: "Alla nödvändiga fält måste vara ifyllda",
    });
  }

  try {
    await placesVisitedService.addPlaceVisited(
      yearVisited,
      rating,
      notes || "",
      userId,
      countryId,
      imageURL ? imageURL.trim() : ""
    );
    return res.status(201).json({
      success: true,
      error: "",
      message: "Nytt resa är tillagd",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updatePlaceVisited = async (req, res) => {
  const { yearVisited, rating, notes, userId, countryId, placeVisitedId } =
    req.body;

  if (!placeVisitedId || !yearVisited || !rating || !userId || !countryId) {
    return res.status(400).json({
      success: false,
      error: "Alla nödvändiga fält måste vara ifyllda",
    });
  }

  try {
    await placesVisitedService.updatePlaceVisited(
      yearVisited,
      rating,
      notes || "",
      userId,
      countryId,
      placeVisitedId
    );
    return res.status(201).json({
      success: true,
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deletePlaceVisited = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Id saknas",
    });
  }

  try {
    await placesVisitedService.deletePlaceVisited(id);
    return res.status(200).json({
      success: true,
      error: "",
      message: "Du har tagit bort resan",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
