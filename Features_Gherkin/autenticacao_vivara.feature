#language: pt

    Funcionalidade: Autenticação
        Contexto:
        Dado que esteja na home
        Quando abrir login

        Esquema de Cenário: Realizar login 
            Quando realizar login com "<email>" e "<senha>"
            Então o usuário será redirecionado para Meus Dados

            Exemplos:
            |   email               |   senha   |
            |   leonardo@vivara.com |   12345   |
            |   leonardo@google.com |   54321   |

        Esquema de Cenário: Realizar login exception
            Quando realizar login com "<email>" e "<senha>"
            Entao deverá ser exibido <"mensagem>"

            Exemplos:
            |   email                   |   senha   |   mensagem                    |
            |   leonardo@vivara.com     |   errada  |   Usuário ou senha incorretos |
            |   aaaaaaaaa.com           |   12345   |   Usuário ou senha incorretos |
            |   leonardo@google.com     |           |   Campo obrigatório           |
            |                           |   12345   |   Campo obrigatório           |


        Cenário: Realizar cadastro
            Dado que esteja na home
            Quando abrir minha conta
            E realizar cadastro
            Então o usuário deverá ser redirecionado para Meus Dados