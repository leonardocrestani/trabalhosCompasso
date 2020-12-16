var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var vector = [];
count = 0
while(count<10) {
    vector[count] = lines.shift().split(" ").map(item => parseInt(item));
    if(vector[count] <= 0) {
        vector[count] = [1];
    }
    console.log(`X[${count}] = ${vector[count]}`);
    count++;
}