var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let anoTotal = 365;
let diasMes = 30;
let resto = 0;

let idade = parseInt(lines);

let anos = parseInt(idade/anoTotal);
resto = (idade%anoTotal);

let meses = parseInt(resto/diasMes);
resto = (resto%diasMes);

let dias = resto;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);