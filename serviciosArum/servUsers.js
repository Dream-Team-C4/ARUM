//llamada de librerias

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const CORS = require('Cors');

//constantes para usar express

const port = 5001;
const app = express();
app.use(CORS());
app.use(express.json());
app.set('json spaces', 2)

//Llamada Esquemas

const userSchema = require('./model/users.js');
const users = require('./model/users.js');
const updateone = require('./model/users.js');

//Llamada Base de Datos

const DB = require('./connection/conn.js');

//Conexion a base de datos

mongoose.connect(DB.mongoURL, {useNewUrlParser:true});

app.listen(port, ()=>{
    console.log('Microservicio Users funcionando en port ' + port);
    
    });

// Listar los usuarios


app.get('/Usuarios/Listar', (req, res)=>{

    userSchema.find(function (err, userSchema){
        if (err) return console.err(err);

        res.send(userSchema);
    })

})

//Agregar Usuario

app.post('/Usuarios/Agregar', (req, res) =>{

    userNuevo = new users(req.body)
    

    userSchema.create(userNuevo)
    res.send("Usuario Agregado")


})

//Modificar usuario

app.put('/Usuarios/modificar', (req,res) => {
    userSchema.updateOne({user:"Ger"}, {
        
        user: "Germana",
        rol: "client"
    },
        function(err, userSchema) {
    
        if (err) return console.err(err);
        res.send("Usuario actualizado"),
        res.send(userSchema)
         
        })
        
});

