const mongoose = require('mongoose');

const placeVisitedSchema = new mongoose.Schema({
  yearVisited: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    default: ''
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true
  },
  imageURL: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('PlaceVisited', placeVisitedSchema);