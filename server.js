/*Chamndo o pacote express, require(fução que tras o que se pede)*/
const express = require("express")

const app = express()
const porta = 3333
/*const serve para não ficar repetindo este valor*/
/*function(função) + nome da função(com parenteses)*/
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
/*Funcões são identificadores que guardam conjuntos de
instruções comações para serem chamados no nosso código, sempre
com a palavra reservada function.*/

/*Chamar a função para ela aparecer, e só escrever a função, 
ex: mostraPorta()*/

/*Para que esse código funcione, devo entrar no terminal e escrever
node server.js(aqui escreve o nome do arquivo) + enter, e então ela 
irá rodar.*/

app.listen(porta, mostraPorta)
//aqui ele ouviu a porta, viu que funcionou e mostrou a Porta.