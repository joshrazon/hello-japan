const mongoose = require('mongoose');
require('dotenv').config();

// Seeds
const memberSeed = require(`./seeds/members.js`);
const subsSeed = require(`./seeds/subscribers.js`);
const toursSeed = require(`./seeds/tours.js`);

// Models
const Member = require(`./models/member.js`);
const Subscriber = require(`./models/subscriber.js`);
const Tour = require(`./models/tour.js`);

// DB Connections
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

// Insert Data

Member.insertMany(memberSeed, function(error, member) {
  console.log('Data import completed.')
});

Subscriber.insertMany(subsSeed, function(error, subscriber) {
  console.log('Data import completed.')
});

Tour.insertMany(toursSeed, function(error, tour) {
  console.log('Data import completed.')
  mongoose.connection.close();
});