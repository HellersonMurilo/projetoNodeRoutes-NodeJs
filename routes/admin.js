const express = require('express')

//iniciar as rotas
const router = express.Router()// o R tem que ser maior

//endpoits:

//POST
router.post('/add-products', function (req, res) {
    res.send({ 
        add: 'Produto adicionado',
        sucess: true,
        method: "POST"
     })
})

router.get('/add-products', function (req, res) {
    res.send({ 
        add: 'Produto adicionado',
        sucess: true,
        method: "GET"
     })
})

router.post('/delete-products', function (req, res) {
    res.send({ deleted: "OK" })
})

//exportar para ter acessos em outros locais
module.exports = router