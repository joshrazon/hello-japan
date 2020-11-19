const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    name:           String,
    links: {
      github:       String,
      linkdIn:      String,
      codePen:      String
    }
  }
);

module.exports = mongoose.model('Member', memberSchema);