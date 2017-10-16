var express = require('express');
//Loading the body parser
var bodyParser = require('body-parser');
//Loading CORS
var cors = require('cors');

//Load curdlogic module
var logic = require('./curdlogic');

var instance = express();
//Configure the body parser with express instance
//Parse the JSON data from request body
instance.use(bodyParser.json());
//Parse the body only with all type of JSON data 
instance.use(bodyParser.urlencoded({extended:false}));
///Configure cors with express instance
instance.use(cors());
instance.get('/api/employees',logic.getall);
instance.get('/api/employees/:id',logic.getbyid);
instance.post('/api/employees',logic.save); 
instance.listen(6070,function(){
    console.log('Server started on port 6070');
});

