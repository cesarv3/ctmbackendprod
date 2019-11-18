const Sequelize = require("sequelize")
const db = require("../database/db")

//Se define el modelo de la tabla de la 
const Material = db.sequelize.define("materiales", {
    //atributos
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        field: 'id'
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'nombre'
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: true,
        field: 'precio'
    },
    unidad: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'unidad'
    }
}, {
    timestamps: false
})
module.exports = Material;


 