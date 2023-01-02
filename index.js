require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CONEXÃO BD
const { sequelize } = require('./database/conexao');

app.get('/', (req,res) => {
    res.json({mensagem: "Hello World!"});
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});