const express = require("express")
//Cofiuração da rota com a constamte "router", que virá de dentro do express.
const router = express.Router()

const app = express()
const porta = 3333

//Request, response: para aparecer no navegador.
function mostraOla(request, response) {
    response.send("Olá, seja bem vindo ao meu primeiro app!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//O '/ola' irá aparecer no endereço, ex: localhost/ola.
app.use(router.get('/ola', mostraOla)) //usa o servidor criado;
app.listen(porta, mostraPorta) //cria servidor;

/*O esperado é não ter mais o erro de get, onde a página no localhost não aparece,
pois agora foi enviado um get.*/