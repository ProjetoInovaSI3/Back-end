const Sequelize = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/bancoteste.sqlite'
});

const openConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.')
    } catch (error) {
        console.error('Erro ao tentar estabelecer conexão com o banco de dados, erro:', error);
    }
}


const db = {} //objeto genérico

db.conexao = openConnection()
db.pessoa = require("../models/pessoaModel")(sequelize, Sequelize)
db.endereco = require("../models/enderecoModel")(sequelize, Sequelize)

module.exports = db

