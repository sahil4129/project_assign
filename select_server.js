var express = require('express');
var app = express();

app.use(express.static('public'))

var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'admin',  
  database : 'mydb'  
});        

app.get('/rows', function (req, res) {
  connection.connect();  

  connection.query('SELECT * FROM starupdata', function(err, rows, fields)   
  {  
      connection.end();

      if (err) throw err;  

      res.json(rows); 

  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});// JavaScript Document