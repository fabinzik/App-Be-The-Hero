// importando o pacote express para dentro da variável express
const express = require('express')
// Importando pacote de criptofria

// Importando o arquivo OngControllers
const OngController = require('./controllers/OngControllers')
const IncidentController = require('./controllers/incidentControler')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// importando a conexão com o banco de dados
//const connection = require('./database/connection')

// acoplando o módulo de rotas do express nessa variável
const routes = express.Router()


routes.get('/ongs', OngController.index)


// Estamos buscando listar a lista de id da tabela ongs
//routes.get('/ongs', async (request, response) => {
  //  const ongs = await connection(' ongs ').select('*')
    //return response.json(ongs)
//})


routes.post('/sessions', SessionController.create)

routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)

routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

    //const parms = request.params
    //const parms = request.query 

    //const { name, email, whatsapp, city, uf } = request.body

    // Vai gerar 4 bytes de carecteres aleatório e vai conventer
    // em uma string do tipo hexadecemal
    //const id = crypto.randomBytes(4).toString('HEX')

    // indicando a tabela um queremos inserir dados e seus respectivos campos
   //await connection('ongs').insert({
     //   id,
       // name,
        //email,
        //whatsapp,
        //city,
        //uf,
    //})
        // retorna uma resposta através de um texto 
       // return response.send('Hello World');

        // retorna uma resposta através de objeto json
      // return response.json({ id })
          
      



// exportando a rota para podermos acessar pelo index.js
module.exports = routes