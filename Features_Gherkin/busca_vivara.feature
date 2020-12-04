#language: pt

    Funcionalidade: Buscar produto
        Contexto:
        Dado que esteja na home

        Cenário: Busca por pesquisa
            Quando pesquisar por 'anel'
            E abrir página de busca
            E selecionar o produto
            Então deverá abrir a página do produto

        Cenário: Busca por categorias
            Quando selecionar uma categoria
            E abrir página da categoria
            E selecionar um produto
            Então deverá abrir a página do produto