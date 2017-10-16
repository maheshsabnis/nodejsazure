var express = require('express');
//Loading the body parser
var bodyParser = require('body-parser');
//Loading CORS
var cors = require('cors');
var instance = express();
//Configure the body parser with express instance
//Parse the JSON data from request body
instance.use(bodyParser.json());
//Parse the body only with all type of JSON data 
instance.use(bodyParser.urlencoded({extended:false}));
///Configure cors with express instance
 
instance.use(cors());


var employee = {
    EmpNo: 0,
    EmpName: '',
    Salary: 0,
    DeptName: '',
    Designation: ''
};
var employees = [
    {
        EmpNo: 101,
        EmpName: 'A',
        Salary: 1000,
        DeptName: 'D1',
        Designation: 'Ds1'
    }, {
        EmpNo: 102,
        EmpName: 'B',
        Salary: 1100,
        DeptName: 'D2',
        Designation: 'Ds2'
    }
];

//Creating REST APIs
instance.get('/api/employees', function (req, resp) {
    //1. Read the Authorization Value from Header
    var authValue = req.headers.authorization;
    //authValue ==> Basic username:password
    //Read the Value of authValue
    var credentials =authValue.split(' ');
    //credentials[0] ==> Basic || credentials[1] ==> username:password
    //Split the Username and password
    var username = credentials[1].split(':')[0];
    var password = credentials[1].split(':')[1];
    if(username==="mahesh" && password==="mahesh"){
        resp
        .status(200)
        .send(JSON.stringify(employees));
    }else{
        resp
        .status(401)
        .send({authentication:false,data:'Invalid Credentials'});
    }
   
});
instance.get('/api/employees/:id', function (req, resp) {
    //Read the header parameter
    var id = req.params.id;
    //Search the record from array based on id
    for (var e in employees) {
        if (employees[e].EmpNo == id) {
            var selEmp = employees[e];
            resp
                .status(200)
                .send({
                    success: true,
                    data: JSON.stringify(selEmp)
                });
        }
    }
    resp
        .status(404)
        .send({success: false,data:'No Record Found'});
});

instance.post('/api/employees',function(req,resp){
console.log('In POST Request');
    //1. Read the Body
    var data = req.body;
    console.log(JSON.stringify(data));
    employees.push(data);
    resp
    .status(200)
    .send({
        success: true,
        data: JSON.stringify(employees)
    });
});


// instance.put('/api/employees/:id',function(req,resp){....});
// instance.delete('/api/employees/:id',function(req,resp){....});
instance.listen(6070,function(){
    console.log('Server started on port 6070');
});



