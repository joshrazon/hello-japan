const express = require('express');
const path = require('path');
const tours = require('./tours');
// Create express app
const app = express();
app.set('view engine', 'ejs');

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Gallery
app.get('/group-tours', (req, res) => res.render('./pages/gallery'));
app.get('/api/v0/tours', (req, res) => res.json(tours));

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