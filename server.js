var express = require('express');
var app = express();
var path = require('path');
var port = 8000;

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
    res.redirect('lineUpChecker.html');
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}!`);
});