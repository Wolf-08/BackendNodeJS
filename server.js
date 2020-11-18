const http = require('http'); //Libreria para poder hacer la comunicacion

//Funcion para responder las peticiones
//Dos arguemntos, la peticion , respuesta
function responderPeticion(request, response) {
    response.end('Hola Mundo');
}

//Progrmacion Orientada  a Objetos Creacion de un objeto server del tipo http 
//Libreria importada anteriormente
let server = http.createServer(responderPeticion); //Creacion de un servdor
//Cada que llega una  peticion http manda a llamar nuestra funcion y provee de esos 
//argumentos, request es la peticion, response la funcionalidad a tener para esa respuesta

server.listen(3000);