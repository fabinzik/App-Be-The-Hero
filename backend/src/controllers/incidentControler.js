// Importando a conexão com o banco de dados
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {

        const { page = 1} = request.query

        const [count] = await connection('incidents').count()

       
       
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
             ])

        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents)

    
},


    async create(request, response) {
        const { title, description, value } = request.body
        const ong_id = request.headers.authorization

        // Inserindo dados na tabela incidents
      const [id] = await connection('incidents').insert({

            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
},

    async delete(request, response) {
        const { id } = request.params
        const  ong_id  = request.headers.authorization

       
       // Buscando um incidente dentro da tebela incidents
       // Como queremos buscar um incidente específico
       // utilizamos o where para indicarmos que queremos um id que seja igual ao id armazenado na variavel ( {id} = request.params )
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        // Se o id que buscamos no banco de dados
        // for diferente vamos retornar o código http 401
        // que não autoriza o usuário a realizar tal tarefa
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        await connection('incidents').where('id', id).delete()

        // Quando vamos retornar uma resposta para o front-end
        // que não tem conteúdo usamos o código http 204s
        return response.status(204).send()
    }
}