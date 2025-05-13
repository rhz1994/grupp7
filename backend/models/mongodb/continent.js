const mongoose = require('mongoose');

const continentSchema = new mongoose.Schema({
  continentName: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Continent', continentSchema);