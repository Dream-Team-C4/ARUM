//llamada de librerias

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');


//constantes para usar express

const port = 5000;
const app = express();

//Llamada Esquemas

const ventaSchema = require('./model/ventas.js');
const productsSchema = require('./model/productos.js');

//Llamada Base de Datos

const DB = require('./connection/conn.js');

//Conexion a base de datos

mongoose.connect(DB.mongoURL, {useNewUrlParser:true});

app.listen(port, ()=>{
    console.log('Microservicio Ventas funcionando en port ' + port);
    
    });

// Listar los productos con stock disponible - rol Admin


app.get('/Ventas/ListarProductos', (req, res)=>{

    productsSchema.find({stock:{$gte:1}},function (err, productsSchema){
        if (err) return console.err(err);
        res.send(productsSchema);

    });

})

//Añadir productos al carrito




