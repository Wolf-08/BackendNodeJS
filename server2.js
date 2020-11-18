const alex = require('express'); //Siempre que quiera importar libreria es asi 
//const express (nombreQueVaTener)= requiere('nombre de la libreria')


//app un objeto de express 
const app = alex();
//APP especificar ruta y que respuesta enviara
//Es como app de flask
//Al igual que la anterior, recibe la peticion y como va 
// a responder a ella
// app.get('/', function(req, res) {
//     res.send("Hola papi");
// });

/*Se va modificar la ruta para que nos de una variable, un dato
Admeas de los 2 parametros por defecto.
Se va usar la interpolacion para que tenga uns expresion js , tweet datos`
Template string backtring */
/*req-contiene inf peticion-> objeto query -> contiene una propiedad por
 cada dato que recibe en la peticion-> propiedad name de la peticion  */
app.get('/saludo', function(req, res) {
    res.send(`Hola ${req.query.name}`);
});
app.listen(3000);