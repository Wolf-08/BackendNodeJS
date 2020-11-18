const category = require('../models/category');

const Category = require('../models/').Category;

module.exports = {

    index: function(req, res) {
        Category.findAll().then((categorys) => {
            res.render('categorias/index', {
                categorys: categorys //Esto es lo que se pasa al front
            });
        })

    },
    show: function(req, res) {
        Category.findByPk(req.params.id).then(function(categorys) {
            res.render('categorias/show', {
                categorys
            })
        })

    },
    edit: function(req, res) {
        Category.findByPk(req.params.id).then(
            function(category) {
                res.render('categorias/edit', {
                    category
                })
            }
        )

    },
    create: function(req, res) {
        Category.create({
            title: req.body.title,
            color: req.body.color,
        }).then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
            res.json(err);
        })

    },

    update: function(req, res) {
        Category.update({
            title: req.body.title,
            color: req.body.color
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(responde) {
            res.redirect('/categorias/' + req.params.id)
        })

    },
    delete: function(req, res) {
        Category.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(categoriasEliminadas) {
            res.redirect('/categorias')
        })

    },
    new: function(req, res) {
        res.render('categorias/new')

    },

}