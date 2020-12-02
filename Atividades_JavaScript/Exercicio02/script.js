function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anoForm = document.getElementById('txtano');
    var resultado = document.querySelector('div#res');

    

    if(anoForm.value.length == 0 || Number(anoForm.value) > ano) {
        window.alert("[ERRO], ano inválido, verifique os dados e tente novamente.")
    }
    else {
        var msex = document.getElementsByName('radsex');
        var idade = (ano - Number(anoForm.value));
        var img = document.createElement('Img');
        img.setAttribute('id', 'foto');
        var genero = '';
        if(msex[0].checked) {
            genero = 'Homem';
            if (idade>0 && idade<=11) {
                genero = 'Criança';
                img.setAttribute('src', './img/criancaMenino.png');
            }
            else if (idade>11 && idade<18) {
                img.setAttribute('src', './img/jovemHomem.png');
            }
            else if (idade>=18 && idade<60) {
                img.setAttribute('src', './img/adultoHomem.png');
            }
            else {
                img.setAttribute('src', './img/idosoHomem.png');
            }
        }
        else {
            genero = 'Mulher';
            if (idade>0 && idade<=11) {
                genero = 'Criança';
                img.setAttribute('src', './img/criancaMenina.png');
            }
            else if (idade>11 && idade<18) {

                img.setAttribute('src', './img/jovemMulher.png');
            }
            else if (idade>=18 && idade<60) {
                img.setAttribute('src', './img/adultaMulher.png');
            }
            else {
                img.setAttribute('src', './img/idosaMulher.png');
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = (`<p>${genero} de ${idade} anos de idade.</p>`);
        resultado.appendChild(img);
    }

}