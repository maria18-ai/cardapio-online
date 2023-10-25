Este projeto é um cardápio online feito com React e TypeScript, com uma API back end em Java. O cliente pode inserir novos produtos no cardápio, que são então armazenados na API. A API é responsável por fornecer os produtos para o front end, que os exibe em uma interface web.

  Tecnologias utilizadas

-Front end: React, TypeScript, Styled Components, Axios
-Back end: Java, Spring Boot, JPA, MySQL

 Funcionalidades

-O cliente pode visualizar o cardápio completo.
-O cliente pode inserir novos produtos no cardápio.
-Os produtos inseridos pelo cliente são armazenados na API.
-A API fornece os produtos para o front end.

 Como usar

Para usar o projeto, siga estas etapas:

Clone o repositório do GitHub.
Instale as dependências do front end:
       npm install

Inicie o front end:
       npm start
       
Instale as dependências do back end:
     mvn clean install
     
Inicie o back end:
     mvn spring-boot:run

     
  Contribuições

Contribuições são bem-vindas. Para contribuir, siga estas etapas:

Faça um fork do repositório.
Faça suas alterações.
Envie um pull request.
Licença


  Exemplo de uso

Aqui está um exemplo de como usar o projeto:

Acesse a página do cardápio.
Clique no botão "novo".
Preencha o formulário com as informações do produto.
Clique no botão "Postar".
O produto será inserido no cardápio e será exibido na página.

  Desafios

Um desafio deste projeto foi implementar a funcionalidade de inserção de novos produtos. Para isso, foi necessário criar uma API back end que aceitasse requisições POST para inserir novos produtos.

Outro desafio foi implementar a autenticação e autorização do usuário. Para isso, foi utilizado o Spring Security para autenticar o usuário e restringir o acesso à funcionalidade de inserção de novos produtos.

