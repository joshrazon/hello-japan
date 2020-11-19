const express = require('express');
const path = require('path');
const tours = require('./seeds/tours');
const ejs = require('ejs');
// const mongoose = require('mongoose');
// require('dotenv').config();

// Import models
// const Cake = require(`./models/tour.js`);

// Create express app
const app = express();

// Set view engine
app.set('view engine','ejs');

// Parse all requests for url encoded form data.
app.use(express.urlencoded({extended: true}));


// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Group-tours (gallery)
app.get('/group-tours', (req, res) => res.render('./pages/gallery'));
app.get('/api/v0/tours', (req, res) => res.json(tours));

// Subscribe 
app.get('/subscribe', (req, res) => res.render('./pages/subscribe'));

// Connect to DB

// mongoose.connect(process.env.MONGODB_URL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });

// var db = mongoose.connection;

// db.on('error', function(error){
//   console.log(`Connection Error: ${error.message}`)
// });

// db.once('open', function() {
//   console.log('Connected to DB...');
// });

// Set homepage end-point
app.get('/' || '/index', function(req, res){
  res.render('./pages/index');
});

// Set gallery-page end-point
app.get('/gallery', (req, res) => {
  res.render('./pages/gallery');
});

// Set subscribe-page end-point
app.get('/subscribe', (req, res) => {
  res.render('./pages/subscribe');
});

// Post handler
app.post('/subscribe', (req, res) => {
  
  console.log(req.body);
  res.render('./pages/subscribed',{name: `${req.body.name}`, email: `${req.body.email}`});
  
});

// Set team-page end-point (about us)
app.get('/team', (req, res) => {
  res.render('./pages/team');
});

// Set JSON end-point

// Subscribers:
app.get('/api/v0/subscribe',(req,res) =>{
  res.json(subscribers);
});
// Members:
app.get('/api/v0/team',(req,res) =>{
  res.json(members);
}) 
// Gallerys:
// Return a JSON array of gallery
// app.get('/api/v0/tours', (req, res) => {
//   Cake.find({}, (err, data) => {
//     if (err) {
//       res.send('Sorry there are something wrong...')
//     }
//     else {
//       res.json(data);
//     }
//   });
// });

// Return JSON object based on the :id of gallery
app.get('/api/v0/tours/:id',(req,res) => {
  let tourId = req.params.id;
  Cake.findOne({id: tourId}, (err, data) => {
    if (err || data===null) {
      res.send('Sorry there are something wrong...');
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});


app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});


// Set port preferrence with default
const PORT = 3000;


app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`)
});