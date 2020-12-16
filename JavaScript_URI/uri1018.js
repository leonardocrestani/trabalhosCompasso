var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let cedula = parseInt(lines);

var notas = [100, 50, 20, 10, 5, 2, 1];
console.log(cedula);

for(var i=0; i<notas.length; i++) {
    let numCedulas = parseInt(cedula/notas[i]);
    console.log(`${numCedulas} nota(s) de R$ ${notas[i]},00`);
    cedula = (cedula%notas[i]);
}