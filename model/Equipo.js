const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define(
    "equipos",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            field:'id'
        },
        nombre:{
            type: Sequelize.STRING,
            field:'nombre'
        },
        descripcion:{
            type:Sequelize.STRING,
            field:'descripcion'
        },
    },
    {
        timestamps:false
    }
)