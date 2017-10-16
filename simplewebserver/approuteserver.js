var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,resp){
    // var pg =  fs.readFileSync('../views/home.html');
    // resp.writeHead(200,{'Content-Type':'text/html'});
    // resp.write(pg);
    // resp.end();
    if(req.url === '/home'){
           fs.readFile('../views/home.html',function(err,pg){
                if(err){
                    resp.writeHead(400,{'Content-Type':'text/html'});
                    resp.write('File Not Found');
                    resp.end();
                }
                resp.writeHead(200,{'Content-Type':'text/html'});
                resp.write(pg);
                resp.end();
           }); 
    }else{
        if(req.url==='/about'){
            fs.readFile('../views/about.html',function(err,pg){
                if(err){
                    resp.writeHead(400,{'Content-Type':'text/html'});
                    resp.write('File Not Found');
                    resp.end();
                }
                resp.writeHead(200,{'Content-Type':'text/html'});
                resp.write(pg);
                resp.end();
           }); 
        }else{
            resp.writeHead(400,{'Content-Type':'text/html'});
            resp.write('Please check URL');
            resp.end(); 
        }
    }
});

server.listen(9090);
console.log('Started listening on 9090');

