const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas 
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:Feliz1978@cluster0.9prnz.mongodb.net/ac1')
}

module.exports = conexao