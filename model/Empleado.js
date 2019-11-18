const Sequelize = require("sequelize")
const db = require("../database/db")


//Se define el modelo de la tabla de la BD
module.exports = db.sequelize.define(
    "empleados",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            field:'id'
        },
        apPaterno:{
            type: Sequelize.STRING,
            field:'apPaterno'
        },
        apMaterno:{
            type: Sequelize.STRING,
            field:'apMaterno'
        },
        nombre:{
            type: Sequelize.STRING,
            field:'nombre'
        },
        telefono:{
            type: Sequelize.STRING,
            field:'telefono'
        },
        domicilio:{
            type: Sequelize.STRING,
            field:'domicilio'
        },
    },
    {
        timestamps:false
    }
)