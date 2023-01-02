const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'api',
    username: 'root',
    password: '1234',
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
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