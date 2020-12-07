
let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero(numero) {
    if(Number(numero) > 0 && Number(numero)<=100) {
        return true;
    }
    else {
        return false;
    }
}

function inLista(numero, lista) {
    if(lista.indexOf(Number(numero)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function adicionar() {
    
    if(isNumero(num.value) && !inLista(num.value, valores)) {

        let n = Number(num.value);

        valores.push(n);
        
        let item = document.createElement('option');
        item.text = `Foi adicionado o número ${n}.`
        lista.appendChild(item);
        res.innerHTML = '';
    }
    else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();

}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valor a lista')
    }
    else {
        let totalValores = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) {
                maior = valores[pos];
            }
            if(valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = (soma/totalValores);

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo a lista tem ${totalValores} valores.</p>`;
        res.innerHTML += `<p>${maior} é o maior valor da lista.</p>`;
        res.innerHTML += `<p>${menor} é o menor valor da lista.</p>`;
        res.innerHTML += `<p>A soma dos valores da lista é ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores da lista é ${media}</p>`;
        

    }
}

