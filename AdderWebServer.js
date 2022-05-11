var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var urlParser = bodyParser.urlencoded({extended:false});

app.get("/",function(req,res){
    res.sendFile(__dirname + '/calculator.html');
});
app.get("/result",function(req,res){
    var result ="<p>The Answer is: "+ req.query.sum+"</p>";
    result+="<br/><a href='/'>Another calculation</a>";
    res.send(result);
});
app.post("/calc",urlParser,function(req,res){
    var firstNum =parseInt(req.body.first);
    var secondNum =parseInt(req.body.second);
    var opt = req.body.opt;
    var sum;
    switch (opt) {
        case "add":
            sum = firstNum+secondNum;
        break;
        case "sub":
            sum=firstNum-secondNum;
        break;
        case "mult":
            sum=firstNum*secondNum;
        break;
        case "division":
            sum=firstNum/secondNum;
        break;
        default:
            sum = firstNum+secondNum;
            break;
    }
    res.redirect(303,"/result?sum="+sum);
});
var server = app.listen(8080);