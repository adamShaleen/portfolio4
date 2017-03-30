var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser());
app.use(cors());

app.use(express.static(__dirname + '/public'));

//listen
app.listen(3005, function() {
    console.log('Portfolio4 on port 3005');
});  //closing server tag
