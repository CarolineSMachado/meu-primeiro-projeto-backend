const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

//função que se refere a um verbo receberá 'request, response'
function mostraSanto(request, response) {
    //Ao invés de usar o .send, usaremos o .json que é uma forma de enviar pela internet várias informações(objetos);
    response.json({
        nome: 'São José',
        imagem: 'https://i.pinimg.com/originals/5c/3a/ba/5c3aba7bd58ba398bea5af0ae0097807.jpg',
        minibio: 'O maior entre os Santos'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando a porta", porta)
}

app.use(router.get('/santo', mostraSanto))
app.listen(porta, mostraPorta)

/*Se não conseguir abrir o servidor é só fechar os servidores que estão abertos, e tentar mais uma vez(os servidores 
abertos aparecem do lado direito do terminal, com os nomes powershell ou node)*/