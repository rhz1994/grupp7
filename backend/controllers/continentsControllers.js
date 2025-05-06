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

exports.createContinent = (async (req, res) => {
  const { continentName } = req.body;

  if (!continentName || continentName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'Du har inte skrivit in någon kontinent',
    });
  }

  try {
    await continentsService.createContinent(continentName);
    return res.status(201).json({
      success: true,
      error: '',
      message: 'Du har lagt till en ny kontinent!'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

exports.updateContinent = (async (req, res) => {
  const { continentName, continentId } = req.body;

  if (!continentName || continentName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: 'Du har inte skrivit in något nam för kontinenten',
    });
  }

  if (!continentId) {
    return res.status(400).json({
      success: false,
      error: 'Du har inte skrivit in något ID för kontinenten du ska uppdatera!',
    });
  }

  try {
    await continentsService.updateContinent(continentName, continentId);
    return res.status(201).json({
      success: true,
      error: ''
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

exports.deleteContinent = (async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: 'Du har inte skrivit in något ID för kontinenten du ska radera!',
    });
  }

  try {
    await continentsService.deleteContinent(id);
    return res.status(201).json({
      success: true,
      error: '',
      message: 'Kontinenten är nu raderad!'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
