const express = require('express');
const aplicacion = express();
const puerto = 3001;
const cors = require('cors');
const mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/blog';

const entradasSchema = new mongoose.Schema({
    titulo:String,
    contenido:String,
    fecha:String
})

const Entradas = mongoose.model("Entradas",entradasSchema)


aplicacion.use(cors());
aplicacion.get('/',(req,res) =>{
    
    mongoose.connect(conexion,{
        useNewUrlParser:true,
        useUnifiedTopology:true}
    ).then(function(){
        Entradas.find({})
            .exec()
            .then(function(entradas){
                res.send(entradas);
        })
    })
})

aplicacion.listen(puerto,() =>{
    console.log("ok arrancado");
})