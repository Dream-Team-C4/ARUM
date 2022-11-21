//llamada de librerias

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const CORS = require('Cors');


//constantes para usar express

const port = 5000;
const app = express();
app.use(CORS());
app.use(express.json());
app.set('json spaces', 2)

//Llamada Esquemas

const productsSchema = require('./model/productos.js');
const productos = require('./model/productos.js');
const {updateOne} = require('./model/productos.js');

//Llamada Base de Datos

const DB = require('./connection/conn.js');

//Conexion a base de datos

mongoose.connect(DB.mongoURL, {useNewUrlParser:true});

app.listen(port, ()=>{
    console.log('Microservicio Productos funcionando en port  ' + port);
    
    });

// Listar los Productos - rol Admin

app.get('/Productos/Listar', (req, res)=>{

    productsSchema.find(function (err, productsSchema){
        if (err) return console.err(err);

        res.send(productsSchema);
    })

})

// Agregar Productos - rol admin

app.post('/Productos/Agregar', (req, res) =>{

    productoNuevo = new productos(req.body)
    productsSchema.create(productoNuevo)
    res.send("Producto Agregado")

       
    
})


//Modificar el producto - rol admin

app.put('/Productos/Modificar/:id', (req,res) => {
    const { id, nombre, desc, precio, stock, imagen } = req.body
    productsSchema.updateOne({id:"id"}, {nombre, desc, precio, stock, imagen},
        function(err, productsSchema) {
    
        if (err) return console.err(err);
        res.send("Producto actualizado"),
        res.send(productsSchema)
         
        })
        
});




//modificar las unidades de los productos
app.put('/Productos/modStock', (req,res) => {
    productsSchema.updateOne({id:"ARUM-010"}, {stock:"2000"},function(err, productsSchema) {
        if (err) return console.err(err);
        console.log(productsSchema);
    });
    res.send("Stock Actualizado")
    
    });


// Listar los productos con stock disponible - rol Cliente


app.get('/Productos/ListarProdStock', (req, res)=>{

    productsSchema.find({stock:{$gte:1}},function (err, productsSchema){
        if (err) return console.err(err);
        res.send(productsSchema);

    });

})

//Añadir productos al carrito - rol cliente









