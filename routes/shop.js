const express = require('express')
const path = require('path')
const routesShop = express.Router()

//endpoits: 

//GET
routesShop.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
})

routesShop.get('/brands', function (req, res) { 
    res.send('brands nessa aba')
})



module.exports = routesShop