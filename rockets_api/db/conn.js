const mongoose = require('mongoose');

async function main() {

    try {

        mongoose.set('strictQuery', true)

        await mongoose.connect('mongodb+srv://teste:wD9ynMXFk416pA0L@rockets.p6rtaux.mongodb.net/?retryWrites=true&w=majority');
    
        console.log('conectou com o banco')
    } catch (err) {
        console.log('Erro: ' + err.message);
    }



}

module.exports = main
