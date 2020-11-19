const express = require('express');
const path = require('path');
<<<<<<< HEAD
const tours = require('./seeds/tours');
=======
<<<<<<< Updated upstream
const tours = require('./tours');
=======
const ejs = require('ejs');
const mongoose = require('mongoose');
const tours = require('./tours');
require('dotenv').config();

// Import models
const Cake = require(`./models/tour.js`);

>>>>>>> Stashed changes
>>>>>>> d2aa53aa1fc7ef67a17f88c152103d03de906734
// Create express app
const app = express();

// Set view engine
app.set('view engine','ejs')

app.use(express.urlencoded({
  extended: true
}))

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< Updated upstream
// Gallery
app.get('/group-tours', (req, res) => res.render('./pages/gallery'));

app.get('/api/v0/tours', (req, res) => res.json(tours));

// Subscribe 
app.get('/subscribe', (req, res) => res.render('./pages/subscribe'));

app.post('/subscribe', (req, res) => {
  
  console.log(req.body);
  res.render('./pages/subscribed',{name: `${req.body.name}`, email: `${req.body.email}`});
  
=======
// Parse all requests for url encoded form data.
app.use(express.urlencoded({extended: true}));

// Connect to DB
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
>>>>>>> Stashed changes
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');
});

// Set homepage end-point
app.get('/' || '/index', function(req, res){
  res.render('pages/index',
    {
      title: "Hello Janpan - Home", 
      current: "home",
    });
});

// Set gallery-page end-point
app.get('/gallery', (req, res) => {
  res.render('pages/gallery',
    {
      title: "Hello Janpan - Gallery", 
      current: "gallery",
    });
});

// Set subscribe-page end-point
app.get('/subscribe', (req, res) => {
  res.render('pages/subscribe',
    {
      title: "Hello Japan - Subscribe", 
      current: "subscribe",
    });
});

// Set team-page end-point
app.get('/team', (req, res) => {
  res.render('pages/team',
    {
      title: "Hello Japan - Team", 
      current: "team",
    });
});

// Do something with form data
app.post('/users', function(request, response) {
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p >`);
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
app.get('/api/v0/tours', (req, res) => {
  Cake.find({}, (err, data) => {
    if (err) {
      res.send('Sorry there are something wrong...')
    }
    else {
      res.json(data);
    }
  });
});

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

// Add more middleware
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

<<<<<<< Updated upstream
const PORT = 8080;
=======
// Set port preferrence with default
const PORT = process.env.PORT || 3000;
>>>>>>> Stashed changes

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});