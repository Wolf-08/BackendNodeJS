const expres = require('express');
const sql3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize')
const methodOverride = require('method-override');
const app = expres();
const tasksRoutes = require('./routes/tasks_routes');
const registerRoutes = require('./routes/registration_routes');
const sesionRoutes = require('./routes/sesion_router');
const sesion = require('express-session');
const findUser = require('./middlewares/find_user');
const AuthUser = require('./middlewares/auth_user');
const categoryRoutes = require('./routes/category_routes');

//Imprtamos el archivo de controllers 
//const tasks = require('./controllers/tasks');
//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); //Sirve para indicar mas metodos aparte de GET Y POST 
//NO sabe nada de putch, put , delete Aunque vengan con POST //pARA LOS QUERY
app.set('view engine', 'pug');
app.use(sesion({
    secret: ['asasasasas', 'sadasdasdasd'],
    saveUninitialized: false,
    resave: false
}));
app.use(findUser);
app.use(AuthUser);





// const sequilize = new Sequelize('proyecto-backend', null, null, {
//     dialect: 'sqlite',
//     storage: './proyecto-backend'
// });

//se importo tasks y de ahi se llama  la funcion home
//app.get('/tasks', tasks.home);

// app.post('/pendientes', function(req, res) {
//     db.run(`INSERT INTO tasks(description) VALUES (?)`, req.body.description);
//     res.send('Insercion Hecha');
// });

/**Uso de rutas y APIREST */

app.use(tasksRoutes);
app.use(registerRoutes);
app.use(sesionRoutes);
app.use(categoryRoutes);


app.get('/', function(req, res) {
    res.render('home', {
        user: req.user
    });
})


app.listen(3000);
process.on('SIGINT', function() {
    console.log('Adios-El servidor');
    process.exit();
});