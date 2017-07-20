const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



// from assets we serve app.css
app.use(express.static('assets'));
// from file we serve index.html
app.use(express.static('files'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({"extended":true}));
app.set('view engine', 'pug')

var request = require('request');

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "files/index.html"))
});

app.get('/home/:username', function (req, res) {

var name = req.params.body;

 //res.send(req.params.body);
});




/*app.get('/profile', function (req, res) {
    res.sendFile(path.join(__dirname, "files/Profile.html"))
});*/

app.post('/profile', function (req, res) {


var url ='http://www.instagram.com/';
var qString =req.body.etUserName;
var param ='?__a=1';

url = url+qString+param;
console.log('url:', url); 

request(url, function (error, response, body) {


var obj = JSON.parse(body)



res.render('index', { title: req.body.etUserName, message: obj.user.username ,image obj.user.profile_pic_url})
  
  console.log('statusCode:', obj); // Print the response status code if a response was received
 
});

   
})


app.listen(8081, function () {
    console.log('Server is running on port 8081');
});
