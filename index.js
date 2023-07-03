//const tracer = require("./tracing")("Magin-service");

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Magin George - Tools -- Rolling Change a new begining" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
