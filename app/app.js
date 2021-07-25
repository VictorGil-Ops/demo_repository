var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World for v1');
});

app.listen(3000, function() {
    console.log('Example app listening on port 30001!');
});
