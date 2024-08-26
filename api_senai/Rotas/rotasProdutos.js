const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorProduto')


router.get('/produtos', controlador.listProdutos)
router.get('/produtos/:id', controlador.getProduto)
router.post('/produtos',controlador.creatProduto )
router.post('/produtos/:id', controlador.updateProduto)
router.delete('/produtos/:id', controlador.deletProduto)


module.exports = router
