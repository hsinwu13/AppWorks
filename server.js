var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("<html><body><h1>Hello, My server!</h1></body></html>");
});

app.get('/getData', function (req, res) {
    var result = 0;
    console.log(req.query.number);
    var num = Number(req.query.number);
    if (typeof (req.query.number) == 'undefined') {
        result = 'Lack of Parameters';
        res.send(result);
    }
    else if (typeof (num) != "number" || isNaN(num)) {
        result = 'Wrong Parameters';
        res.send(result);
    }

    else {
        result = ((1 + num ) *  num ) / 2;
        res.send(result + '');
    }
});


var server = app.listen(3000, function () {
    console.log('Node server is running..');
});