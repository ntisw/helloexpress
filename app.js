var express = require('express');
var app = express();
app.use(express.static("www"));
var moment = require('moment')
require('moment/locale/th')
app.get("/",welcome);
app.get("/today",showToday)
//app.get("/hey",test)
app.listen('5555');

function welcome(request,response){
    response.send('░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░ <br>░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░ <br>░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░ <br>░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░ <br>░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░ <br>░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░ <br>░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░ <br></br>░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░ <br></br>░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░ <br></br>░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░ <br></br>▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░ <br></br>▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌ <br></br>▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░ <br></br>░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░ <br></br>░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░ <br></br>░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░ <br></br>░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░ <br></br>░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░ <br></br>░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░ <br></br><h1>Express by Nantipat</h1>');
}
function showToday(request,response) {
    //show thai date
    response.send(moment().format('MMMM Do YYYY, h:mm:ss a'));
}