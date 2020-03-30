
const crypto = require("crypto")

const connection = require('../database/connection')

module.exports = {

    async index (request, response)  {
          const ongs = await connection(' ongs ').select('*')
          return response.json(ongs)
      },


    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body

    // Vai gerar 4 bytes de carecteres aleatório e vai conventer
    // em uma string do tipo hexadecemal
    const id = crypto.randomBytes(4).toString('HEX')

    // indicando a tabela um queremos inserir dados e seus respectivos campos
   await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
        // retorna uma resposta através de um texto 
       // return response.send('Hello World');

        // retorna uma resposta através de objeto json
       return response.json({ id })

    }

}