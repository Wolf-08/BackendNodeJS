const expres = require('express');
let CategoryController = require('../controllers/category');

let router = expres.Router();
//Sobre el mismo uri cambiar el verbo de http
router.route('/categorias').get(CategoryController.index).post(CategoryController.create);
//Se implementa get y post
router.get('/categorias/new', CategoryController.new);
//Almacen de los registros.
router.get('/categorias/:id/edit', CategoryController.edit);

//Autoincrementa URI 
//Slock version de cadena en el esquema URI 
//Seo paara motores de busqueda
router.route('/categorias/:id')
    .get(CategoryController.show)
    .put(CategoryController.update) //wildcard /tasks/new posiblemente igualPorElComodin
    .delete(CategoryController.delete);

//Exportamos las rutas 

module.exports = router;