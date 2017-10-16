//1. Load the http module
var http = require('http');

var emps = [
    {EmpNo:101,EmpName:'A'},
    {EmpNo:102,EmpName:'B'},
    {EmpNo:103,EmpName:'C'},
    {EmpNo:104,EmpName:'D'}
];

//2. Create server
var server = http.createServer(function(req,resp){
   resp.writeHead(200,{'Content-Type':'application/json'});
   resp.write(JSON.stringify(emps));
   resp.end();
});

server.listen(7080);
console.log('server started on 7080');