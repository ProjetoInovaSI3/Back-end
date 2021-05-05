module.exports = (sequelize, Sequelize) => {
    const demanda = sequelize.define('DEMANDA',
        {
            CPF: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            NOME: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            DEMANDA: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            NUMERO: {
                type: Sequelize.NUMERIC,
                allowNull: false
            },
            EMAIL: {
                type: Sequelize.TEXT,
                allowNull: false
            }
        },


        {
            timestamps: false,
            tablename: 'DEMANDA',
            freezeTableName: true
        }
    )

    return demanda
}