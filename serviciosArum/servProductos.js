//llamada de librerias

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');


//constantes para usar express

const port = 5000;
const app = express();

//Llamada Esquemas

const productsSchema = require('./model/productos.js');

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

    productsSchema.create({
        id: "ARUM-009",
        nombre: "Arum Premium 5",
        desc: "Colageno con hidrogeno vitalizado potenciado",
        precio: "160000",
        stock: "250",
        imagen: "https://arumofficial.com/wp-content/uploads/2022/07/MOKUP-2-Recovered12.png"

    },
    function(err){
        if (err) return console.err(err);
     res.send(200)

    });


})

//Modificar el producto

app.put('/Productos/modificar', (req,res) => {
    productsSchema.updateOne({id:"ARUM-001"}, {
        
        nombre: "Arum Nature",
        desc: "Colageno Nativo",
        precio: "75000",
        stock: "100",
        imagen: "https://i0.wp.com/gbq.com.co/wp-content/uploads/2021/06/ARUM-FRESH-CAJA-X-21-SOBRES.jpg?fit=503%2C504&ssl=1",
    },
        function(err, productsSchema) {
    
        if (err) return console.err(err);
        res.send("Producto actualizado"),
        res.send(productsSchema)
         
        })
        
});




//modificar las unidades de los productos
app.put('/Productos/modStock', (req,res) => {
    productsSchema.updateOne({id:"ARUM-001"}, {stock:"1000"},function(err, productsSchema) {
        if (err) return console.err(err);
        console.log(productsSchema);
    });
    res.send("Stock Actualizado")
    
    });


//Listar las ventas





