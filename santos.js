const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

//Criar uma lista de santos que será colocado em uma constante
const santos = [
    {
        nome: 'São José',
        imagem: 'https://i.pinimg.com/originals/5c/3a/ba/5c3aba7bd58ba398bea5af0ae0097807.jpg',
        minibio: 'O maior entre os Santos'
    },
    {
        nome: 'São Pedro',
        imagem: 'https://66.media.tumblr.com/366915c4a519c811c3b2d9d7d2d3f348/tumblr_n4ruot10aG1sknvnko1_1280.jpg',
        minibio: 'Primeiro Papa'
    },
    {
        nome: 'Santa Rita de Cássia',
        imagem: 'https://i.pinimg.com/originals/bc/91/68/bc916854b42eba06a600ad8d176122f9.jpg',
        minibio: 'Padroeira das causas impossíveis'
    }
]
//o que é JSON, procurar mais
function mostraSantos(request, response) {
    response.json(santos)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/santos', mostraSantos))
app.listen(porta, mostraPorta)