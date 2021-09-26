const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'dbagendamento',
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
    }
})

  module.exports = sequelize;
