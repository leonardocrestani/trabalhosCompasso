function carregar() {
    var mensagemHora = document.getElementById('horaAgora');
    var img = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    mensagemHora.innerHTML = `Agora são ${hora} horas.`;

    if (hora>6 && hora<=12) {
        // Bom dia
        img.src = "./manha.png"
        document.body.style.background = '#e2cd9f'
    }
    else if (hora>12 && hora<=18) {
        // Boa tarde
        img.src = "./tarde.png"
        document.body.style.background = '#b9846f'
    }
    else {
        // Boa noite
        img.src = "./noite.png"
        document.body.style.background = '#071c1f'
    }
}

    