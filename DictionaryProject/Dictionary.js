var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var myDB = require("./word");

var app = express();

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/dict.html");
});

 app.use("/lookup",function(req,res){
     var data;
     var x = myDB.queryData('select * from entries where word = "' + req.body.term+'"',  result=>{
        data=result;
        res.json(data);
    });
    
//     var conn = mySQl.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'root',
//         database:'entries'
//     });
//     conn.connect();
//     var data1 ;
//     conn.query('select * from entries where word = "king"',function(err,rows,fields){
//         if(err) throw err;
//         console.log("data "+rows[0]);
// data1=rows[0];
//         return rows;
//     });
//     conn.end();
//     res.send(data1);
 });
app.listen(8080,function(){
    console.log("Server is running...");
})