var express = require('express');
//Loading the body parser
var bodyParser = require('body-parser');
//Loading CORS
var cors = require('cors');
//Load the path module
var path = require('path');
//Load curdlogic module
var logic = require('./logic');

var instance = express();
// //Configure static files with express and provide it to instance
// instance.use(express.static(path.join(__dirname + './../node_modules/jquery/dist')));
// instance.use(express.static(path.join(__dirname + './../node_modules/bootstrap/dist/css')));

//Declare router
var router = express.Router();
//Define Routes for views
// router.get('/home',function(req,resp){
//     resp.sendFile(path.join(__dirname + './../views/home.html'));
// });
//Configure the router with express instance
//instance.use(router);

// Configure the body parser with express instance Parse the JSON data from
// request body
instance.use(bodyParser.json());
//Parse the body only with all type of JSON data
instance.use(bodyParser.urlencoded({extended: false}));
///Configure cors with express instance
instance.use(cors());
instance.get('/api/employees', logic.getall);
instance.get('/api/employees/:id', logic.getbyid);
instance.post('/api/employees', logic.save);
instance.listen(6070, function () {
    console.log('Server started on port 6070');
});
