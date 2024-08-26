const db = require('../db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const router = require('../Rotas/rotasClientes');

const listclientes = async (req, res)=>{
    var clientes = db.clientes
    res.json(clientes)
}

const getCliente = async (req, res) =>{
    const _id = parseInt(req.params.id); 
    const lista_clientes = db.clientes; 

    // Encontrar o produto com o ID correspondente
    const cliente = lista_clientes.find(cliente => cliente.id === _id);

    cliente ? res.json(cliente) : res.status(404).send({error:"not found"})

};

const createCliente = async(req, res)=>{
    const data = req.body; 
    

    if(!data.nome || !data.senha){
        return res.status(406).send({error: 'Nome e senha devem ser informados'})  
    }  
    const _id = uuidv4()
    data.id = _id

    lista_clientes = db.clientes
    lista_clientes.push(data)

    fs.writeFile('./db.json', JSON.stringify(db), (err)=> {
        if (err){
            res.status(500).send({error: "Houve um erro"})
        }
    })
    res.status(204).send()
};

const updateClientes = async(req, res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find((produto) => cliente.id == _id)
    if (!cliente || dados){
        res.status(404).send({error:'not found'})
    }
    console.log(dados)
    for(const dado in dados){
        if(!(dado in cliente)){
            console.log('erro: este dado não existe')
            continue
        }
        produto[dado]=dados[dado]
    }
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            res.status(404).send({error:'not found'})
        }
    })
}

const deletClientes = async(req, res) => {
    const _id = req.params.id
    const lista_clientes = db.clientes
    console.log(lista_clientes)
    const produto = lista_clientes.find((cliente) => cliente?.id == _id)

    var idx = lista_clientes.indexOf(cliente)
    lista_clientes.splice(idx, 1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            res.status(404).send({error: 'erro no servidor'})
        }
    })
    res.status(204).send()
}



module.exports = {listclientes, createCliente, getCliente, updateClientes, deletClientes}