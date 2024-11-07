# BookApp

Este projeto foi desenvolvido em angular na versão 14.2.1 [Angular CLI](https://github.com/angular/angular-cli).

Um aplicativo simples desenvolvido em Angular para cadastro e consulta de livros, com funcionalidades de validação de formulário, integração com API (ou mock) e uso de hooks de Git para garantir boas práticas de commit.

## Tecnologias Utilizadas

- **Angular**: Framework para construção de aplicações web.
- **Angular Material**: Biblioteca de componentes UI para melhorar a interface do usuário.
- **RxJS**: Biblioteca para programação reativa.
- **ESLint**: Ferramenta para garantir a qualidade do código.
- **Commitlint**: Ferramenta para garantir convenções de commit (seguindo padrão Conventional Commits).

## Funcionalidades

- **Cadastro de livros**: Adiciona livros com título, autor e data de publicação.
- **Consulta de livros**: Exibe uma lista de livros cadastrados, com informações sobre título, autor e data de publicação.
- **Validação de formulário**: Verifica se todos os campos são preenchidos antes de cadastrar um livro.
- **Mensagens de erro**: Utiliza o `MatSnackBar` do Angular Material para exibir mensagens de erro ou sucesso.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/book-app.git
   cd book-app
   npm install
   ng serve

Padrões de Commit
Este projeto utiliza o Conventional Commits para padronizar a nomenclatura dos commits. Exemplo:

feat: adiciona nova funcionalidade
fix: corrige erro
chore: atualiza dependências
docs: atualiza documentação


