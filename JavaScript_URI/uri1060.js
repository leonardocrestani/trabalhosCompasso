var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

// pedir como mapear tranformar em number e depois filtar

var counter = 0;
var value = lines.filter(function(item) {
    if(item > 0) {
        counter++
        return counter;
    }
});

console.log(`${counter} valores positivos`);