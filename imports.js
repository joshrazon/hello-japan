const mongoose = require('mongoose');
require('dotenv').config();

// Seeds
const memberSeed = require(`./seeds/members.js`);
const subsSeed = require(`./seeds/subscribers.js`);
const toursSeed = require(`./seeds/tours.js`);


const Member = require(`./models/member.js`);
const Subscriber = require(`./models/subscriber.js`);
const Tour = require(`./models/tour.js`);


mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

Member.insertMany(memberSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

Subscriber.insertMany(subsSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

Tour.insertMany(toursSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});