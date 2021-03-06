const express = require('express');
const path = require('path');
const tours = require('./seeds/tours');
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();

// // Import models
const Tour = require(`./models/tour.js`);
const Member = require(`./models/member.js`);
const Subscriber = require(`./models/subscriber.js`);

// Create express app
const app = express();

// Set view engine
app.set('view engine','ejs');

// Parse all requests for url encoded form data.
app.use(express.urlencoded({extended: true}));

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set homepage end-point
app.get('/' || '/index', function(req, res){
  res.render('./pages/index');
});

// Set gallery-page end-point
app.get('/group-tours', (req, res) => {
  res.render('./pages/gallery');
});

// Set subscribe-page end-point
app.get('/subscribe', (req, res) => {
  res.render('./pages/subscribe');
});

// Set team-page end-point (about us)
app.get('/team', (req, res) => {
  res.render('./pages/team');
});

// Set admin-page end-point
app.get('/admin', (req, res) => {
  res.render('./pages/admin');
});

// Connect to DB

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

app.get('/group-tours/:id', (req, res) => {
  const singleTour = parseInt(req.params.id);
  Tour.find({id: req.params.id}, (err,data) => {
    if (err || data===null) {
      res.send('Sorry there are something wrong...');
      console.log(err);
    }
    else {
      res.render('pages/tour-info', {
        id: `${singleTour}`,
        title: `${data[0].title}`
      });
    }
  });  
});

// Post handler
app.post('/subscribe', (req, res) => {
  const newSub = new Subscriber({name: `${req.body.name}`, email: `${req.body.email}`});
  newSub.save(err => {
    if (err) {
      return console.log(err);
    } else {
      return console.log('Saved!')
    }
  })
  res.render('./pages/subscribed',{name: `${req.body.name}`, email: `${req.body.email}`});
  
});

// Set JSON end-point
// ---Subscribers:
app.get('/api/v0/subscribe',(req,res) =>{
  Subscriber.find(function(err, data) {
    res.json(data)
  });
});

app.get('/api/v0/tours', (req, res) => {
  Tour.find(function(err, data) {
    res.json(data)
  });
});

// ---Members:
app.get('/api/v0/team',(req,res) =>{
  Member.find(function(err, data) {
    res.json(data)
  });
});

// Return JSON object based on the :id of gallery
app.get('/api/v0/tours/:id',(req,res) => {
  let tourId = req.params.id;
  Tour.findOne({id: tourId}, (err, data) => {
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
  res.render('./pages/404');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`)
});