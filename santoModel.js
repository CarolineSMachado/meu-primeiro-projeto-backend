const mongoose = require('mongoose')
//Model são as regras do modelo Objeto;

//require abaixo quer saber se é obrigatório, true para sim;
//o frontend não conseguirá enviar algo fora do que está sendo exigido em baixo;
const SantoSchema = new mongoose.Schema({
    //new mongoose.Schema é usado para definir um objeto;
    nome: {
        type: String,
        require: true
    },
    imagem: {
        type: String,
        require: true
    },
    citacao: {
        type: String,
        require: true
    },
    minibio: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('santo', SantoSchema)