//1. Load Mongoose
var moongooseDrv = require('mongoose');
//2. Set the Promise Object Globally to manage Async Calls
moongooseDrv.Promise = global.Promise;

//3. Define Connection with MongoDB
moongooseDrv.connect("mongodb://localhost/EmployeeDatabase");
//4. Get the Connection Object
var db = moongooseDrv.connection;

if (db === 'undefined') {
    console.log('Database is not found');
} else {
    //5. Define Schama
    var employeeSchema = moongooseDrv.Schema({EmpNo: String, EmpName: String, Salary: String, DeptName: String, Designation: String});

    //6. Define the model with model mapping where
    //schema will map with the collection
    //Parameter 1: The Name of model for mongoose drv
    //Parameter 2: The Schema Created
    //Parameter 3: Name of the Collection on MongoDB
    var employeeModel = moongooseDrv.model("Employees",employeeSchema,"Employees"); 
    exports.getall = function (req, resp) {
           employeeModel.find().exec(function(err,res){
               if(err){
                   resp.status(500).send({success:false,data:'Internal Server Error'});
               }
               resp.status(200).send({success:true,data:res});
           }); 
         
    };

    exports.getbyid = function (req, resp) {
        //Read the header parameter
        var id = req.params.id;
        employeeModel.findById(id).exec(function(err,res){
            if(err){
                resp.status(500).send({success:false,data:'Internal Server Error'});
            }
            resp.status(200).send({success:true,data:res});
        });
    };

    exports.save = function (req, resp) {
        console.log('In POST Request');
        //1. Read the Body
        //var data = req.body;
        var newEmp = {
           EmpNo:req.body.EmpNo,
           EmpName:req.body.EmpName,
           Salary:req.body.Salary,
           DeptName:req.body.DeptName,
           Designation:req.body.Designation     
        };
        employeeModel.create(newEmp,function(err,res){
            if(err){
                resp.status(500).send({success:false,data:'Internal Server Error'});
            }
            resp.status(200).send({success:true,data:res});
        });
    };
}
