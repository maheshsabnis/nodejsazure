console.log('Hello World!!!');

function add(x, y) {
    console.log(parseInt(x) + parseInt(y));
}

add(10, 20);

var names = [
    'Sean Connary',
    'George Luznaby',
    'Roger Moore',
    'Trimothy Dalton',
    'Pierce Brosnon',
    'Danial Craig'
];

console.log(JSON.stringify(names));

for(var n in names){
  console.log(names[n]);
}

var emps = [
    {EmpNo:101,EmpName:'A'},
    {EmpNo:102,EmpName:'B'},
    {EmpNo:103,EmpName:'C'},
    {EmpNo:104,EmpName:'D'}
];
console.log(JSON.stringify(emps));

emps.push({EmpNo:105,EmpName:'E'});
for(var e in emps){
    console.log(JSON.stringify(emps[e]));
}




