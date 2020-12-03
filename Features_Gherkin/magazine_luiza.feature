#language: pt

    Funcionalidade: Carrinho de compras

        Cenário: Adicionar computador ao carrinho
            Dado que esteja logado
            Quando pesquisar por 'Computador'
            E selecionar o primeiro
            E adicionar ao carrinho
            Então o produto deverá ser exibido no carrinho