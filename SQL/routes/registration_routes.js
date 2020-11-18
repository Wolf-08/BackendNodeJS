const expres = require('express');

let RegisterController = require('../controllers/registration');
let router = expres.Router();

router.get('/signup', RegisterController.new);

router.route('/users').post(RegisterController.create);

module.exports = router