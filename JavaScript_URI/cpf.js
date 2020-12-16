var input = require('fs').readFileSync('stdin', 'UTF8');

var values = input.split('\n');

for(var control = 0; control < values.length;) {

    var cpf = values[control].replace(/[^\d]+/g, "").split("").map(Number);

    if(control<10000 && cpf.length === 11) {

        control++

            var acumTeste = 0;
            for(var j = 0; j <= 9; j++) {
                var acumCPF = 0;
                for(var i = 0; i < cpf.length; i++){
                    if(cpf[i] === j) {
                        acumCPF++;
                        if(acumCPF===11){
                            console.log("CPF invalido");
                            acumTeste++;
                        }
                    }
                }
            }
            
            acumD10 = 0;
            acumD11 = 0;
                for (var i = 0; i < 9 ; i++) {
                    acumD10 += cpf[i] * (i+1);
                    acumD11 += cpf[i] * (9-i);
                }

            acumD10 = (acumD10%11)%10;
            acumD11 = (acumD11%11)%10;

            if (acumD10 === cpf[9] && acumD11 === cpf[10]) {
                if(acumTeste===0) {
                    console.log("CPF valido");
                }
            }
            else {
                if(acumTeste===0) {
                    console.log("CPF invalido");
                }
            }
        
    }
    else {
        break;
    }

}