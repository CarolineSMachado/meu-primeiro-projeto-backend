//Primeira atividade
const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

//Estes dois 'const' poderiam aparecer dentro da 'function' mostraHora
const data = new Date()
const hora = data.toLocaleTimeString('pt-BR')

function mostraPorta() {
    console.log('Servidor criado e rodando a porta', porta)
}

function mostraHora(request, response) {
    response.send(hora)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)