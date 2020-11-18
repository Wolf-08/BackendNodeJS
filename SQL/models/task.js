'use strict';
//Para poder usar en el server y no repetir conexiones
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        description: DataTypes.TEXT,
    }, {});
    // Task.associate = function(models) {
    //     // associations can be defined here
    // };


    Task.associate = function(models) { //Asignar una funcion a la propiedad associate 
            Task.belongsTo(models.User, {
                as: 'user'
            }); //Una tarea le pertenece a un usuario
            //Que recibe el modelo con el que se establece la relacion 
            //segun un json de configuracion para la relacion 
            //nombre de la tabla asociativa, alias para la asociacion
            Task.belongsToMany(models.Category, {
                through: 'TaskCategories',
                as: 'categories'

            });
        }
        //Nombres para asociaciones 

    return Task;
};