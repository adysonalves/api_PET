const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});


sequelize.authenticate().then(success => {
    console.log('Conectado ao BD!');
}).catch(err => {
    console.log('Ocorreu um erro ao se conectar com o BD: '+err);

});



module.exports = {
    Sequelize,
    sequelize
}