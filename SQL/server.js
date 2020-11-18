/*Ataques SQLINJECTION */
/*Base de Datos con NodeJs*/
//Importacion de sqlite3
const expres = require('express');
const sql3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequilize')
    //:memory base de datos en la ram para pruebas iniciales
    //let db = new sql3.Database('proyecto-backend');
let app = expres();
app.use(bodyParser.urlencoded({ extended: true }));
//Recibe parametros base,user, pass
const sequilize = new Sequelize('proyecto-backend', null, null, {
    dialect: 'sqlite',
    storage: './proyecto-backend'
});

//Correr una consulta
//Sentencia en sql
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT,description varchar(20) )');
//Lo que se envia en el body (cuerpo de la peticion) en el campo description

app.post('/pendientes', function(req, res) {
    //De esta manera se pueden hacer ataques
    //Puede poner codigo sql en la descripcion
    //db.run(`INSERT INTO tasks(description) VALUES ('${req.body.description}')`);
    db.run(`INSERT INTO tasks(description) VALUES (?)`, req.body.description);
    //Limpiara los argumentos, reemplaza los valores,
    res.send('Insercion Hecha');
});


app.listen(3000);
//Se crea un proceso para cada peticion
//Donde se cierra la base de Datos
process.on('SIGINT', function() {
    console.log('Adios-El servidor');
    //db.close();
    process.exit();
});