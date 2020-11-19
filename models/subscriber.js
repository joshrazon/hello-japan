const mongoose = require('mongoose');

const subsSchema = new mongoose.Schema(
  {
    name:         String,
    email:        String
  }
);

module.exports = mongoose.model('Subscriber', subsSchema);