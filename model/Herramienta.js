const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define('herramientas', {
    //atributos
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        field:'id'
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true,
        field:'nombre'
    },
    descripcion:{
        type:Sequelize.STRING,
        allowNull: true,
        field:'descripcion'
    }
}, {
    timestamps: false
});

