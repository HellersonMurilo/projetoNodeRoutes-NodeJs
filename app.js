var express = require('express')
const bodyParser = require('body-parser')

//importando o routes admin para o app
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop') 

var app = express()

//Middleware
app.use(express.static('views'));//adicionando arquivos estaticos

app.use(adminRoutes)//utilizando as routes como middleware
app.use(shopRoutes)//utilizando as routes como middleware

app.use('/', (req,res)=>{
    res.status(404).send({ //para enviar o status Code, colocamos antes do send
        error: true,
        message:'Erro 404 - Página não encontrada'
    })
})

var porta = 3003

app.listen(porta, ()=>{
    console.log(`Porta aberta em "localhost://${porta}"`)
})