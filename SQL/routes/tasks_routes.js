const expres = require('express');
let TaskController = require('../controllers/tasks');
//Accedemos a las propiedades de router de express
let router = expres.Router();
//Sobre el mismo uri cambiar el verbo de http
router.route('/tasks').get(TaskController.index).post(TaskController.create);
//Se implementa get y post

router.get('/tasks/new', TaskController.new);
//Almacen de los registros.


router.get('/tasks/:id/edit', TaskController.edit);


//Autoincrementa URI 
//Slock version de cadena en el esquema URI 
//Seo paara motores de busqueda
router.route('/tasks/:id')
    .get(TaskController.show)
    .put(TaskController.update) //wildcard /tasks/new posiblemente igualPorElComodin
    .delete(TaskController.delete);

//Exportamos las rutas 

module.exports = router;