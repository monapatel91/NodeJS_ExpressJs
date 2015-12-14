var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser  = require('body-parser');

var app = express();
var flightsSchema = {
  name: String,
  position: String,
  webpage: String
};

mongoose.connect('mongodb://localhost/fdetail');
var flights = mongoose.model('flights', flightsSchema, 'flight');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/flight', function (req, res) {
  console.log('Finding flight with filter: ', req.query);
  flights.find({}, function (err, doc) {
    res.send(doc);
  });
});

app.get('/flight/:id', function (req, res) {
  console.log('Finding flights with ID: ', req.params.id);
  flights.findById(req.params.id, function (err, foundDocument) {
    res.send(foundDocument);
  });
});

app.post('/flight', function (req, res) {
  console.log('Creating flights: ', req.body);
  new flights(req.body).save(function (err, doc) {
    res.send(doc);
  });
});




app.delete('/flight/:id', function(req, res){
  console.log('Deleting flights with ID: ' + req.params.id);
  flights.remove({_id: req.params.id}, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);