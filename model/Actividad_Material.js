const Sequelize = require("sequelize")
const db = require("../database/db")

//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define('actividad_materiales', {
    materialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    actividadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
},{
    timestamps: false
});