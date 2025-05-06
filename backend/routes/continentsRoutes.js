const express = require('express');
const router = express.Router();
const continentController = require('../controllers/continentsControllers');


router.get('/api/continents', continentController.getContinents);
router.get('/api/continent', continentController.getContinent);
router.post('/api/continent', continentController.createContinent);
router.put('/api/continent', continentController.updateContinent);
router.delete('/api/continent/:id', continentController.deleteContinent);

module.exports = router;
