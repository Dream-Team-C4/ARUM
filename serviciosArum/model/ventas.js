const mongoose = require('mongoose');

const ventaSchema = mongoose.Schema({

    idP: String,
    nombreP: String,
    descP: String,
    cantidad: String,
    venta: String

})

module.exports = mongoose.model("ventas", ventaSchema);