var express= require("express");
var session = require("express-session");
var db = require("./db.js");

var app = express();
app.set('views', __dirname + '\\views');
app.set("view engine","pug");

app.use(session({
    secret:"salt for cookie signing",
    resave:false,
    saveUninitialized : true,
}));

app.get("/",function(req,res){
    if(!req.session.count)
        req.session.count = 0;
    res.render('numberQuiz',{question:db.questions()[req.session.count],count:req.session.count,score:0});
    res.end();
});
app.post("/submit",express.urlencoded({extended:true}),function(req,res){
    if(!req.session.score)
        req.session.score=0;
    
    var answer = req.body.answer;
    var correctAnswer =db.answers()[req.session.count];
    if(answer == correctAnswer){
        req.session.score +=1;
    }
    req.session.count += 1;
    if(req.session.count == 5){
    res.render("result",{count:req.session.count,score:req.session.score});
    }
    res.render("numberQuiz",{question:db.questions()[req.session.count],count:req.session.count,score:req.session.score});
    res.end();
});
app.listen(8080,function(){
    console.log("server is running ...");
});
