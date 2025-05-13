const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Country", CountrySchema);
