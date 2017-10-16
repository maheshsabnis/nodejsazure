var fs =  require('fs');
//1. Read Synchronously
var data =  fs.readFileSync('./myfile.txt');
console.log('Synchronous Reading ');
console.log();
console.log(data.toString());

console.log();

console.log('Reading Asynchronously');
fs.readFile('./myfile.txt',function(err,data){
    if(err){
        console.log('Some Error Occured ' + err.message);
        return;
    }
    console.log();
    console.log(data.toString());
});
console.log('Done!!!!!!!!');

fs.writeFile('./myfile1.txt','The data to be written',function(err){
    if(err){
        console.log('File Write Error ' + err.message);
        return;
    }
    console.log('File Created.');
});












