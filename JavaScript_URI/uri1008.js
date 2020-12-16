var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var values = lines.map(item => Number(item));

let numberF = values[0];
let hoursWork = values[1];
let salaryHour = values[2];

let totalSalary = (hoursWork * salaryHour);

console.log(`NUMBER = ${numberF}`);
console.log(`SALARY = U$ ${totalSalary.toFixed(2)}`)