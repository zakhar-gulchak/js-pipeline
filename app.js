var express = require("express");
var app = express();
var logger = require('morgan');
app.use(logger('combined'));

app.use('/', express.static('public'));

app.get('/test', function(request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
