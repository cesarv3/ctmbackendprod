const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define('actividad_equipos', {
    //atributos
    equipoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field:'equipoId'
    },
    actividadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field:'actividadId'
    }
}, {
    timestamps: false
});