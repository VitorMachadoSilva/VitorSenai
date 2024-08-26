const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('./Rotas/rotasProdutos')
const rotasClientes = require('./Rotas/rotasClientes')



app.use(bodyParser.json())

app.use('', rotasProdutos)
app.use('', rotasClientes)

// Iniciar o servidor
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});


