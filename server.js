var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(4000, function() {
    console.log('Express server listening on port ' + 4000);
});