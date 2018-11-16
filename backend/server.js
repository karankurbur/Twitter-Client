var express = require('express');
var request = require('request');

var bodyParser = require('body-parser');
var cors = require('cors');
var functions = require('./functions');
var config = require('./config');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.post('/authorize', functions.authorize);
app.post('/search', functions.search);
app.post('/user', functions.user);
var token;


app.listen(3000, () => {
    var header = config.consumerkey + ':' + config.consumersecret;
    var encheader = new Buffer(header).toString('base64');
    var finalheader = 'Basic ' + encheader;

    request.post('https://api.twitter.com/oauth2/token', {
        form: { 'grant_type': 'client_credentials' },
        headers: { Authorization: finalheader }
    }, function (error, response, body) {
        if (error)
            console.log(error);
        else {
            token = JSON.parse(body).access_token;
            config.bearertoken = JSON.parse(body).access_token;
            console.log("Bearer token " + token);
        }

    })
    //console.log(`Example app listening on port 3000!`)
})