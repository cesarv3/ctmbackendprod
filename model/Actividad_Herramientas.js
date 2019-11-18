const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define('actividad_herramientas', {
        //atributos
        herramientaId:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            field:'herramientaId'
        },
        actividadId:{
            type: Sequelize.INTEGER,
            foreignKey: true,
            field:'actividadId'
        },
        cantidad:{
            type:Sequelize.INTEGER,
            field:'cantidad'
        }
    }, {
        timestamps: false
    });

