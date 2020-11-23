# language : pt

    Funcionalidade: Verificar descontos

    Contexto: Dado que esteja logado no site

        Esquema de cenário: Procurar produtos com desconto
            Quando selecionado <item>
            E escolher a marca desejada
            E utilizar o filtro de descontos
            Então devem ser mostrados <item> com a % selecionada de desconto

        Exemplos:
            |   item        |
            |   smartphones |
            |   TVs         |
            |   livros      |