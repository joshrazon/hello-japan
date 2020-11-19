const mongoose = require('mongoose');

const toursSchema = new mongoose.Schema(
  {
    name:           Number,
    links: {
      github:       String,
      linkdIn:      String,
      codePen:      String
    }
  }
);

module.exports = mongoose.model('Tour', toursSchema);