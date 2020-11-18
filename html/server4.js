const expres = require('express');
let app = expres();

//Con expres podemos usar un servidor de 
//Archivo estaticos
/*Inserta un nuevo middleware todo va estar cargado en el servidor*/
app.use('/assets', expres.static('assets', {
    etag: false,
    maxAge: '5h' //Sepuede representar el milisegundo
        //Tener cuidado con lo que se pone el tiempo ya que si se hace un cambio esete
        //No se toma en cuenta hasta pasado el tiempo
}));
//La /diagonal no importa podemos ponerla el nombre de cualquier 


/*Para poder usas vistas utilizamos otro metodo de app */

app.set('view engine', 'ejs');

// app.get('/', function(req, resp) {
//     resp.sendFile('index.html', {
//         root: __dirname
//     });
//     //resp.send(__dirname)
// });
//Se puede enviar cualquier archivo sin espacios

app.get('/', function(req, resp) {
    resp.render('index');
});


app.listen(3000);