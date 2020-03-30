// importando o pacote express para dentro da variável express
const express = require('express');

const cors = require('cors')

// importando a rota do arquivo routes.js
const routes = require('./routes')


// variavel (app) armazenado a aplicação
const app = express();

app.use(cors())

// estamos falando para o express ir na requisição e converte o formato JSON
// em igual entendivel para o JavaScript
app.use(express.json())

// app ira usar o arquivo routes.js
app.use(routes)

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * Put: Alterar uma informação no back-end
 * Delete: Deletar uma informação no back-end
 * 
 */ 

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?", serve para: filtro,paginação
  * exemplo: http:localhost:3333/users?name=Fabio
  * estamos buscando na tabela name o usuário fabio
  * 
  * 
  * exemplo de paginação:
  * http:localhost:3333/users?page2&nome=Fabio&idade=20
  * estamos buscando na página 2 os usuários com o nome fabio e com a idade de 20 anos
  * 
  * Route Params: Parâmetro utilizados para identificar recursos
  * exemplo:
  * http:localhost:3333/users/1
  * estamos buscando o usuário com o id = 1
  * 
  * Request Body: Corpo de requisição, utilizado para criar ou alterar recursos
  * 
  * 
  * 
  * 
  * 
  */

 


// criando a rota raiz da aplicação
// request = requisição, response = resposta
//app.post('/users', (request, response) => {

    //const parms = request.params
    //const parms = request.query

//    const body = request.body

  //  console.log(body)

        // retorna uma resposta através de um texto 
       // return response.send('Hello World');

        // retorna uma resposta através de objeto json
       //return response.json({
         //  evento : 'Semana OmniStack 11.0',
       //    aluno : 'Francisco Cuoco'
     //  });

//});

// manda a app ouvir a porta 3333
// assim quando acessarmos localhost:3333 iremos cair na aplicação
app.listen(3333);