'use strict'; //hooks ORM 
//Importar la libreria
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        password_hash: DataTypes.STRING,
        password: DataTypes.VIRTUAL //La contraseña no se guarda en la base de datos 
    }, {});

    User.login = function(email, password) {
        // Buscar al usuario
        return User.findOne({
            where: { //Asociarlo con el email 
                email: email
            }
        }).then(user => {
            //Verificar al usuario con la password verificando el hash y el 
            //tEXTO Plano
            if (!user) return null;
            //Como un operador ternario
            return user.authenticatePassword(password).then(valid => valid ? user : null);
        });
    };
    //Metodos de instancia, del prototipo de JS
    User.prototype.authenticatePassword = function(password) {
        return new Promise((res, rej) => {
            bcrypt.compare(password, this.password_hash, function(err, valid) {
                if (err) return rej(err);

                res(valid);
            })
        })

    }


    User.associate = function(models) { //Recibe otros modelos del proyecto
        // associations can be defined here Relaciones 
        //hasMany belongsTo Tiene muchos y le pertenece a 
        //Tasks
        User.hasMany(models.Task, {
            as: 'tasks'
        }); //Un usuario tiene muchas tareas

    };
    //Objeto creado despues del hook
    User.beforeCreate(function(user, options) {
        //Debido a que es un proceso asincrono se necesita retornar en una promesa
        return new Promise((res, rej) => {
            if (user.password) {
                bcrypt.hash(user.password, 10, function(error, hash) {
                    user.password_hash = hash; //Asignarle al atributo que se guarda el hash calculado
                    res();
                })
            };

        }); //Funcion para marcarla como terminada 

    });

    return User;
};