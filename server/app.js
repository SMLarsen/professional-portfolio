/*jshint esversion: 6 */
const express = require('express');
const app = express();
const path = require('path');

const portDecision = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('public'));

app.listen(portDecision, function() {
    console.log("Listening on port: ", portDecision);
});
