const express = require('express');
const bodyParser = require('body-parser')

let app = express();
//Decirle a app que use body-parser
//y a express que para darle respuesta a una peticion use body parser
/* Formato urlencoded , extented, enviar parametros anidados*/
app.use(bodyParser.urlencoded({ extented: true }));
/*Recibir datos del cuerpo de la peticion */
app.post('/', function(req, resp) {
    resp.send(`Hola ${req.body.name}`);
});


app.listen(3000);