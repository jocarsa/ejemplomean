const express = require('express');
const aplicacion = express();
const puerto = 3001;
const cors = require('cors');

aplicacion.use(cors());
aplicacion.get('/',(req,res) =>{
    res.send(`
    [
        {
            "nombre":"jose Vicente",
            "email":"info@jocarsa.com",
            "telefono":"1234567"
        },
        {
            "nombre":"Juan",
            "email":"juan@jocarsa.com",
            "telefono":"1234567"
        },
        {
            "nombre":"Jorge",
            "email":"jorge@jocarsa.com",
            "telefono":"1234567"
        }
    ]
`);
})

aplicacion.listen(puerto,() =>{
    console.log("ok arrancado");
})