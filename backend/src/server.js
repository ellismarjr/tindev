const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const server = express()
// Conectando no servidor Mongo
mongoose.connect('mongodb+srv://tindev:tindev@cluster0-sdw2v.mongodb.net/tindev?retryWrites=true&w=majority', {useNewUrlParser: true})

server.use(cors())
// diz ao Node que iremos utilizar forma json nas requisições
server.use(express.json())
server.use(routes)

server.listen(3333)