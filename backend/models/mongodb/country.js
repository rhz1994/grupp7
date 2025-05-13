const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
    trim: true
  },
  countryCapital: {
    type: String,
    required: true,
    trim: true
  },
  countryPopulation: {
    type: Number,
    required: true
  },
  continentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Continent',
    required: true
  },
  flagURL: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);