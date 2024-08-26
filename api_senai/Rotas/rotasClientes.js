const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorClientes')


router.get('/clientes', controlador.listclientes)
router.get('/clientes/:id', controlador.getCliente)
router.post('/clientes',controlador.createCliente )
router.post('/clientes/:id', controlador.updateClientes)
router.delete('/clientes/:id', controlador.deletClientes)


module.exports = router
