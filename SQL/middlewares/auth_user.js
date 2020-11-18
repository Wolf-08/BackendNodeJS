module.exports = function(req, res, next) {
    //Para saber a que opciones si puede acceder a la pagina o no
    if (!req.originalUrl.includes("tasks")) return next();

    if (req.session.userId) return next();

    res.redirect('/sesiones');
}