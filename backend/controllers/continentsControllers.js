const continentsService = require('../services/continentsServices');

exports.getContinents = (async (req, res) => {
  try {
    const continents = await continentsService.getContinents();
    res.json({ continents });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});

exports.getContinent = (async (req, res) => {
  const { id } = req.params;
  console.log('param' + id);

  try {
    const continent = await continentsService.getContinent(id);
    res.json({ continent });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
