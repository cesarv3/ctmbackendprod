const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define('actividad_empleados', {
    //atributos
    actividadId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        field:'actividadId'
    },
    empleadoId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        field:'empleadoId'
    }
}, {
    timestamps: false
});