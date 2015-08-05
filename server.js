// JavaScript source code
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(__dirname + '/static'));

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at:', server.address());
});