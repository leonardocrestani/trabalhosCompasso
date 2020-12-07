function tabuada() {

    let num = document.getElementById('txtNum');
    let tab = document.getElementById('selTab');

    if(num.value.length == 0) {
        alert('Por favor digite um numero')
    }
    else {
        let numero = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while(c <= 10) {

            var tabFim = (numero*c);

            let item = document.createElement('option');
            item.text = `${numero} x ${c} = ${tabFim}`
            tab.appendChild(item)

            c++;
        }
    }

}

function limparTab() {

    let tab = document.getElementById('selTab');
    tab.innerHTML = '';

}