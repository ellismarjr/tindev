const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// aceita conexões websocket quanto http
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {

}

io.on('connection', socket => {
  const { user } = socket.handshake.query

  console.log(user, socket.id)
  connectedUsers[user] = socket.id
})


// Conectando no servidor Mongo
mongoose.connect('mongodb+srv://tindev:tindev@cluster0-sdw2v.mongodb.net/tindev?retryWrites=true&w=majority', {useNewUrlParser: true})

app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
})

app.use(cors())
// diz ao Node que iremos utilizar forma json nas requisições
app.use(express.json())
app.use(routes)

const portProduction = process.env.PORT || 8080;
// const portDev = 3333

server.listen(portProduction)