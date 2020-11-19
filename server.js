const express = require('express');
const path = require('path');
const tours = require('./seeds/tours');
// Create express app
const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({
  extended: true
}))

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Gallery
app.get('/group-tours', (req, res) => res.render('./pages/gallery'));

app.get('/api/v0/tours', (req, res) => res.json(tours));

// Subscribe 
app.get('/subscribe', (req, res) => res.render('./pages/subscribe'));

app.post('/subscribe', (req, res) => {
  
  console.log(req.body);
  res.render('./pages/subscribed',{name: `${req.body.name}`, email: `${req.body.email}`});
  
});

// index.ejs test
app.get('/index2', (req, res) => res.render('./pages/index2'));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = 8080;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});