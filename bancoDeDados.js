//Arquivo para criar a conexão com o banco de dados, mongoose é uma biblioteca.
const mongoose = require('mongoose')
require('dotenv').config()
//quando for utilizar o mongodb nas funções(), apareceram as expressões "async", "await", "try" e "catch"; 
//async resolveum problema por vez, também significa que pode recebe-los a qualquer momento; 
async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou.')
        //enquanto o await serve para que o node não pare de atender outros usuários, quando há uma operação demorada no programa; 
        await mongoose.connect(process.env.MONGO_URL)/*isto é um dado sensível e deve ser mantido em segurança, O URL será ignorado 
e não será publicado, será colocado no lugar "process.env.MONGO_URL";*/
        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}   
//o module.exports deixa o código disponível para o uso de outros arquivos, quando for chamada a função.
module.exports = conectaBancoDeDados 