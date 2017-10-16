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

exports.getall = function (req, resp) {
    resp
        .status(200)
        .send(JSON.stringify(employees));
};

exports.getbyid = function (req, resp) {
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
        .send({success: false, data: 'No Record Found'});
};

exports.save = function (req, resp) {
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
};
