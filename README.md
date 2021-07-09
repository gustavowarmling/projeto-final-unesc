# Projeto final

Aplicação desenvolvida para o projeto final da disciplina de programação web ||.

# URL para teste
- https://projeto-final-gustavo.herokuapp.com/

# Tecnologias utilizadas
  - Node.JS
  - Express.js
  - axios
  - yarn

# Como utilizar?

  - Instale as dependências
    ```sh
    yarn
    ```
    Inicie a aplicação
    ```sh
    yarn start
    ```
  - Utilize as rotas no navegador e/ou Insomnia
    ```sh
    /designer
    /style
    ```

# Rotas!

**GET** /designer
  - Retorna a lista de designers cadastrados
  - Paginação adicionada na rota
  - ```sh
    {
        nome: String,
        social: String,
        nascimento: Number,
        marcaId: String,
    }
    ```
**GET** /designer/:id
  - Retorna o designer referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        social: String,
        nascimento: Number,
        marca: {
           nome: String,
           pais: String, 
           surgimento: Number,
           sobre: String,
        },
    }
    ```
**POST** /designer
  - Rota para a criação de um novo designer
  - Necessário passar o id de umas das marcas de https://projeto-final-mateus.herokuapp.com/brand
  - ```sh
    {
        nome: String,
        social: String,
        nascimento: Number,
        marcaId: String,
    }
    ```
**PUT** /designer/:id
  - Rota para a edição do designer referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        social: String,
        nascimento: Number,
        marcaId: String,
    }
    ```
**DELETE** /designer/:id
  - Rota para a exclusão do designer referente ao Id definido na rota
  - ```sh
    {
        message: "Designer deletado com sucesso!"
    }
    ```


**GET** /style
  - Retorna a lista de estilos cadastrados
  - Paginação adicionada na rota
  - ```sh
    {
        nome: String,
        descricao: String,
        ano: String,
        surgimento: String,
    }
    ```
**GET** /style/:id
  - Retorna o estilo referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        descricao: String,
        ano: String,
        surgimento: String,
    }
    ```
**POST** /style
  - Rota para a criação de um novo estilo
  - ```sh
    {
        nome: String,
        descricao: String,
        ano: String,
        surgimento: String,
    }
    ```
**PUT** /style/:id
  - Rota para a edição do estilo referente ao Id definido na rota
  - ```sh
    {
        nome: String,
        descricao: String,
        ano: String,
        surgimento: String,
    }
    ```
**DELETE** /style/:id
  - Rota para a exclusão do estilo referente ao Id definido na rota
  - ```sh
    {
        message: "Estilo deletado com sucesso!"
    }
    ```
