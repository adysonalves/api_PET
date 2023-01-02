require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CONFIGURAÇÕES DO EXPRESS
const configExpress = require('./config/configExpress')(app, express);

// CONEXÃO BD
const { sequelize } = require('./database/conexao');

// ROTAS
app.get('/', (req,res) => {
    res.json({mensagem: "Olá mundo!"});
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});