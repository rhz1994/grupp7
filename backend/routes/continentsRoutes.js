const express = require('express');
const router = express.Router();
const continentController = require('../controllers/continentsControllers');

// GET all continents
router.get('/api/continents', continentController.getContinents);
// GET a single continent by ID
router.get('/api/continents/:id', continentController.getContinent);
// CREATE a new continent
router.post('/api/continents', continentController.createContinent);
// UPDATE a continent
router.put('/api/continents', continentController.updateContinent);
// DELETE a continent by ID
router.delete('/api/continents/:id', continentController.deleteContinent);

module.exports = router;
