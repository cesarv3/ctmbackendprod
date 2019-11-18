const Sequelize = require('sequelize');

const sequelize = new Sequelize("constructionmanager","root"," ",{
    host:"localhost",
    dialect:"mysql",
    operatorAliases:false,
    pool:{
        max: 5,
        min: 0,
        acquire:30000,
        idle:10000
    }
});

const Actividad_Material = sequelize.define('actividad_materiales',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    idMaterial: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    idActividad: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    cantidad: {
        type: Sequelize.INTEGER,
    }
},{
    timestamps: false
});

Actividad_Material.sync({force:true});