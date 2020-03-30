// método up é reponsável pela criação da tabela
// método down é responsável por executar uma função caso der algum problema no banco
// qual comando ela irá realizar para voltar atrás e corrigir esse problema
exports.up = function(knex) {
    
    // criando tabela do banco de dados
    return knex.schema.createTable('ongs', function(table) {
       // chave primária
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).primary()

        // notNullable = o campo não pode ser nulo
        // uf, 2 = uf tem o limite de dois carecteres

    })
  
};

exports.down = function(knex) {
    // deletar a tabela caso o banco encontre algum problema
   return knex.schema.dropTable('ongs')
  
};
