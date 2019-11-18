const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define('actividades', {
    //atributos
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        field:'id'
    },
    idObra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field:'idObra'
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
        field:'descripcion'
    },
    progreso: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true,
        field:'progreso'
    }
}, {
    timestamps: false
});

