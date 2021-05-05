const { Body } = require("node-fetch");
const Sequelize = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/bancoDeCadastro.sqlite'
});

const openConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso.')
    } catch (error) {
        console.error('Erro ao tentar estabelecer conexão com o banco de dados, erro:', error);
    }
}


const db = {}
db.conexao = openConnection()
db.demanda = require("../models/cadastroDemanda")(sequelize, Sequelize)
module.exports = db