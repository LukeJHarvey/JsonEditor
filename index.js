var express = require('express');
var app = express();
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
app.use(express.static('static'));
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})