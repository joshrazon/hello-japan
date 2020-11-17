const express = require('express');
const path = require('path');
// Create express app
const app = express();
app.set('view engine', 'ejs');

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));


app.get('/gallery', (req, res) => res.render('./pages/gallery'));

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