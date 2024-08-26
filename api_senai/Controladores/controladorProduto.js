
const db = require('../db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const router = require('../Rotas/rotasProdutos');



const listProdutos = async (req, res)=>{
    var produtos = db.produtos
    res.json(produtos)
}

const getProduto = async (req, res) =>{
    const _id = parseInt(req.params.id); 
    const lista_produtos = db.produtos; 

    // Encontrar o produto com o ID correspondente
    const produto = lista_produtos.find(produto => produto.id === _id);

    produto ? res.json(produto) : res.status(404).send({error:"not found"})

};


const creatProduto = async(req, res)=>{
    const data = req.body; //pegar informações da resquisição body
    

    if(!data.nome || !data.preco){
        return res.status(406).send({error: 'Nome e preço devem ser informados'})  
    }  
    const _id = uuidv4()
    data.id = _id

    lista_produtos = db.produtos
    lista_produtos.push(data)

    fs.writeFile('./db.json', JSON.stringify(db), (err)=> {
        if (err){
            res.status(500).send({error: "Houve um erro"})
        }
    })
    res.status(204).send()
};

const updateProduto = async(req, res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_produtos = db.produtos
    const produto = lista_produtos.find((produto) => produto.id == _id)
    if (!produto || dados){
        res.status(404).send({error:'not found'})
    }
    console.log(dados)
    for(const dado in dados){
        if(!(dado in produto)){
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

const deletProduto = async(req, res) => {
    const _id = req.params.id
    const lista_produtos = db.produtos
    console.log(lista_produtos)
    const produto = lista_produtos.find((produto) => produto?.id == _id)

    var idx = lista_produtos.indexOf(produto)
    lista_produtos.splice(idx, 1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            res.status(404).send({error: 'erro no servidor'})
        }
    })
    res.status(204).send()
}



module.exports = {listProdutos, creatProduto, getProduto, updateProduto, deletProduto}