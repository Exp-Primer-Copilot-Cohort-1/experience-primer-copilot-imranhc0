// Create web server
var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});