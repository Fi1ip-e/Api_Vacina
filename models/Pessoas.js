const { DataTypes } = require('sequelize');
const db = require('../config/configData');


const Pessoas = db.define('tb_pessoas', {

    nome: { type: DataTypes.STRING },
    cpf: { type: DataTypes.STRING(11) },
    idade: { type: DataTypes.STRING(3) },
    sexo: { type: DataTypes.STRING },
    local: { type: DataTypes.STRING },
    data: { type: DataTypes.DATE },
    horario: { type: DataTypes.TIME }
});

module.exports = Pessoas;