const express = require("express") //aqui estou iniciando o express(chamando-o);
const router = express.Router() //aqui estou configurando a 1° parte da rota, que sai do express;
const cors = require('cors') /*estou trazendo o pacote cors, que permite consumir essa api no front-end 
(poderá ser modificada pelo front quando tiver);*/

const conectaBancoDeDados = require('./bancoDeDados')//ligando ao arquivo bando de dados
conectaBancoDeDados()//chamando a função que conecta o banco de dados
const Santos = require('./santoModel') 

const app = express() //aqui estou iniciando o app;
app.use(express.json()) // aqui diz que o app, de dentro do express terá os dados trafegados do no json;
app.use(cors()) //chamando para ser usado
const porta = 3333 // aqui estou criando a porta;

//Toda função atrelada a uma rota receberá "request e response";
//o que é JSON?, procurar mais;
async function mostraSantos(request, response) {
    try {
        /*find é uma função do mongoose para se comunicar com o BD, ele guarda o resultado na constante
        e envia esse objeto na resposta da requisição;*/
        const santosVindosDoBancoDeDados = await Santos.find()
        
        response.json(santosVindosDoBancoDeDados)

    } catch(erro) {
        console.log(erro)
    }
} // get, o que aparecera no site;

//POST;
async function criaSantos(request, response) {
    //novoSanto recebe a const Santos que contém a regra Model, a criação também está dentro da regra;
    const novoSanto = new Santos ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        //as informações novas(do "save()") são salvas na const santoCriado;
        const santoCriado = await novoSanto.save()
        //status é um código de sucesso, com o n° 201 que significa resposta criada;
        response.status(201).json(santoCriado)
    } catch(erro) {
        console.log(erro)
    }
}

//PATCH;
async function corrigeSantos(request, response) {
    try {
        const santoEncontrado = await Santos.findById(request.params.id)

        if (request.body.nome) {
            santoEncontrado.nome = request.body.nome
        }

        if (request.body.imagem) {
            santoEncontrado.imagem = request.body.imagem
        }
        
        if (request.body.minibio) {
            santoEncontrado.minibio = request.body.minibio
        }

        if (request.body.citacao) {
            santoEncontrado.citacao = request.body.citacao
        }
/*nos comunicamos com o BD por meio do await esperando o "save()", que é a atualização das informações, 
que serão salvas na const 'santoAtualizadoNoBancoDeDados'*/
        const santoAtualizadoNoBancoDeDados = await santoEncontrado.save()
        response.json(santoAtualizadoNoBancoDeDados)
    } catch(erro) {
        console.log(erro)
    }
//Esta é a instrução para ajudar o JS a identificar que cada propriedade'()' quer colocar uma informação nova;
}

//DELETE
async function deletaSantos(request, response) {
    try {
        await Santos.findByIdAndDelete(request.params.id)
        response.json({ messagem: "Santo deletado com sucesso!"})
    } catch(erro) {
        console.log(erro)
    }
    
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
} //porta

app.use(router.get('/santos', mostraSantos)) // 2° configuração da rota, get;
app.use(router.post('/santos', criaSantos))
app.use(router.patch('/santos/:id', corrigeSantos))
app.use(router.delete('/santos/:id', deletaSantos))
app.listen(porta, mostraPorta) // servidor ouvindo a porta;