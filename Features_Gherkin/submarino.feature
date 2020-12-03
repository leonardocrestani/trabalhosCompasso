#language: pt

    Funcionalidade: Lista favoritos

        Cenário: Favoritar produto
            Dado que esteja logado
            Quando selecionar uma categoria
            E selecionar um produto
            E abrir a página do produto
            E clicar em favoritar
            Então o produto deverá ser exibido nos favoritos