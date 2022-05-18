var express = require('express');
var mySQl = require('mysql');
var app = express();

var conn = mySQl.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'entries'
});

module.exports.queryData = function(queryString, callback) {
    try {
        conn.connect();
        console.log('Step 1');

        conn.query(queryString, function(err, rows, fields) {
            console.log('Step 2');
            if (err) {
                console.log("ERROR : " + err);
            }
            callback(rows);

            return rows;
        });
        conn.end();
        console.log('Step 3');
    }
    catch(ex) {
        console.log("EXCEPTION : " + ex);
    }
};