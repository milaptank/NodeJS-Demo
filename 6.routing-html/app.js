const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


// from assets we serve app.css
app.use(express.static('assets'));
// from file we serve index.html
app.use(express.static('files'));

app.use(bodyParser());
app.use(bodyParser.urlencoded({"extended":true}));
app.set('view engine', 'pug')

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "files/index.html"))
});

app.get('/home/:username', function (req, res) {
    res.send(req.params);
});

/*app.get('/profile', function (req, res) {
    res.sendFile(path.join(__dirname, "files/Profile.html"))
});*/

app.post('/profile', function (req, res) {
    res.render('index', { title: req.body.etUserName, message: req.body.etUserName })
})


app.listen(8081, function () {
    console.log('Server is running on port 8081');
});
