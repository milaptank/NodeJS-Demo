// importing modules
const express = require("express");
const bodyParser = require('body-parser')

// app is a instance of express
// to run express on top of nodejs need to run app instance
const app = express();
var jsonParser = bodyParser.json()
var rawParser = bodyParser.raw();
var textParser = bodyParser.text();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser, function (req, res) {

  console.log(req.body)
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})


// basic GET request
app.get('/', function(req, res) {
    res.send("GET Request");
});

// will match /xyz path
app.get('/xyz', function(req, res) {
    res.send("GET Request on /xyz");
});

// will match /xyz.txt eg: .tar .html .exe
app.get('/xyz.txt', function(req, res) {
    res.send("GET Request on /xyz.txt");
});

// will match pattrn eg: acd, abcd
app.get('/ab?cd', function (req, res) {
  res.send("String Pattrn: ab?cd");
});

// will match pattrn eg: abbcd, abcd, abbbcd
app.get('/ab+cd', function (req, res) {
  res.send("String Pattrn: ab+cd");
});

// will match pattrn eg: abbcd, abcd, abbbcd
app.get('/ab+cd', function (req, res) {
  res.send("String Pattrn: ab+cd");
});

// will match eg: hat, cat, rat
app.get(/.*at$/, function (req, res) {
  res.send("Pattrn : /.*at/");
});

// will match
// http://localhost:3000/users/kamerk22/age/21
// req will provide all get request params
app.get('/users/:username/age/:age/city/:city', function (req, res) {
    //res.send(req.params.username +"is from "+req.params.city +"and he is age of "+req.params.age);
    var x = req.params;
    var json = [
      {"name": x.username,
          "city":x.city},
      {  "name": x.username,
        "city":x.city}
    ]

    res.send(json)
});

// chain routing
app.route('/chain')
.get(function(req, res) {
    res.send("GET Request from Chain Route");
})
.post(function(req, res) {


      res.send("POST Request from Chain Route")
});


// server port listen on 8080
app.listen(8081, function() {
    console.log('Server is running on port 8080');
});
