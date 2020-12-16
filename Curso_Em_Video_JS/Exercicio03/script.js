function calcularPasso() {

    var inicio = document.getElementById('inicioInput');
    var fim = document.getElementById('fimInput');
    var passo = document.getElementById('passoInput');
    var res = document.getElementById('res');

    if(inicio.value.length==0 || passo.value.length==0 || fim.value.length==0) {
        res.innerHTML = `Impossivel contar!`;
    }
    else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p<=0) {
            alert(`Passo invalido, coloque um passo MAIOR que 0.`);
        }
        else {
            if(i<f) {
                for(var c=i; c<=f; c += p) {
                    res.innerHTML += (`${c} ${"->"} `);
                }
                res.innerHTML += `FIM`;
            }
            else {
                for(var c=i; c>=f; c -= p) {
                    res.innerHTML += (`${c} ${"->"} `);
                }
                res.innerHTML += `FIM`;
            }
        }
    }


}