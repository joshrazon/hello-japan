const mongoose = require('mongoose');

const toursSchema = new mongoose.Schema(
  {
    id:           Number,
    title:        String,
    credit:       String,
    url:          String,
    width:        Number,
    height:       Number
  }
);

module.exports = mongoose.model('Tour', toursSchema);