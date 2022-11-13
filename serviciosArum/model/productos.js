const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({

        id: String,
        nombre: String,
        desc: String,
        precio: String,
        stock: String,
        imagen: String
      
})

module.exports = mongoose.model("productos", productsSchema);