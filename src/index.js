import express from 'express'
import connectDataBase from './database/db.js'
import routes from './routes/router.js'
import 'dotenv/config'


const server = express()
server.use(express.json())
server.use(routes)

connectDataBase()
.then( () => console.log("Conectado com banco de dados"))
.catch( (error) => console.log("Erro ao conectar com banco de dados" + error))

server.listen(process.env.example.PORT, () => console.log("Server running"))