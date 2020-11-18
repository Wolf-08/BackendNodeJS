const expres = require('express');

let SesionController = require('../controllers/sesion');
let router = expres.Router();

router.route('/sesiones').get(SesionController.new)
    .post(SesionController.create)
    .delete(SesionController.destroy);


module.exports = router;