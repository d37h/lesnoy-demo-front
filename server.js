'use strict'

var express = require('express');

// App
var app = express();
app.set('port', (process.env.PORT || 8080));

// your angular-project folder
app.use('/', express.static(__dirname + '/dist/lesnoy-demo'));

app.listen(app.get('port'), function() {
  console.log("running: port", app.get('port'));
});
