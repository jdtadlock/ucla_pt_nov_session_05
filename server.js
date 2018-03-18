var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('view options', { layout: 'layouts/main' });

// Load Routes
var view_routes = require('./routes/view_routes');
var api_routes = require('./routes/api_routes');

// localhost:5000
app.use('/', view_routes);
app.use('/api', api_routes);

app.listen(port, function() {
  console.log(`Listening on ${port}`);
});

module.exports = app;