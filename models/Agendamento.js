const {DataTypes} = require('sequelize');
const Pessoas = require('./Pessoas')
const db = require('../config/configData');

    
    const Agendamento = db.define('tb_agendamentos', {

        local: {type: DataTypes.STRING},
        data: {type: DataTypes.DATE},
        horario: {type: DataTypes.TIME},

    });

    Agendamento.associate = (models) => {

        Agendamento.belongsTo(models.Pessoas, {

            foreignKey: 'pessoas_id',
            as: 'pessoa',
        });
    };

module.exports = Agendamento;