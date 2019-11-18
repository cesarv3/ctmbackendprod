const Sequelize = require("sequelize")

const sequelize = new Sequelize("constructionmanager","root","larvitar0711",{
    host:"constructionmanager.cbi6s75jfkub.us-east-2.rds.amazonaws.com",
    dialect:"mysql",
    operatorAliases:false,
    pool:{
        max: 5,
        min: 0,
        acquire:30000,
        idle:10000
    }
});

//------------------------------TABLAS--------------------------------
const Obra = sequelize.define(
    "obras",
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
        ubicacion:{
            type:Sequelize.STRING,
            field:'ubicacion'
        }
    },
    {
        timestamps:false
    }
)

const Actividad = sequelize.define("actividades", {
	//atributos
	id: {
		type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
	},
	idObra: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: true
	},
	descripcion: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	progreso: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: true
	}
}, {
    timestamps: false,
    freezeTableName: true,
    name: {
        singular: "actividad",
        plural:"actividades"
    }
});

const Herramienta = sequelize.define('herramientas', {
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
    timestamps: false,
    freezeTableName: true
});

const Material = sequelize.define("materiales", {
    //atributos
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    unidad: {
        type: Sequelize.STRING,
        allowNull: true
    }
    
}, {
    timestamps: false,
    freezeTableName: true,
    name: {
        singular: "material",
        plural:"materiales"
    }
});

const Equipo = sequelize.define('equipos', {
	//atributos
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	descripcion: {
		type: Sequelize.STRING,
		allowNull: false,
	}
}, {
    timestamps: false
});
const Empleado = sequelize.define('empleados',{
	//atributos
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	apPaterno: {
		type: Sequelize.STRING,
		allowNull: false
	},
	apMaterno: {
		type: Sequelize.STRING,
		allowNull: false
	},
	nombre: {
		type: Sequelize.STRING,
		allowNull: false
	},
	telefono: {
		type: Sequelize.STRING,
		allowNull: false
	},
	domicilio: {
		type: Sequelize.STRING,
		allowNull: false
    }
},{    
    timestamps: false,
    freezeTableName: true
}
);
const Usuarios = sequelize.define("usuarios", {
    //atributos
    id: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      field: 'id'
    },
    nombreUsuario: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'nombreUsuario'
    },
    password:{
      type: Sequelize.STRING,
      allowNull: false,
      field: 'password'
    }
}, {
    timestamps: false
});
//-----------------------------TABLAS DE ASOCIACIONES-----------------------------

const Actividad_Herramientas = sequelize.define('actividad_herramientas', {
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
    timestamps: false,
    freezeTableName: true,
});

const Actividad_Material = sequelize.define('actividad_materiales',{
    materialId: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    actividadId: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    cantidad: {
        type: Sequelize.INTEGER,
    }
},{
    timestamps: false,
    freezeTableName: true
});

const Actividad_Equipo = sequelize.define('actividad_equipos', {
	//atributos
	equipoId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		foreignKey: true
	},
	actividadId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		foreignKey: true
	},
}, {
    timestamps: false
});

const Actividad_Empleado = sequelize.define('actividad_empleados', {
	//atributos
	actividadId: {
		type: Sequelize.INTEGER,
		allowNull: false,
        foreignKey: true,
        field: 'actividadId'
	},
	empleadoId: {
		type: Sequelize.INTEGER,
		allowNull: false,
        foreignKey: true,
        field: 'empleadoId'
	},
}, {
    freezeTableName: true,
    timestamps: false
});

//----------------------------------ASOCIACIONES----------------------------------

Actividad.belongsTo(Obra, { foreignKey: 'idObra' }); //Actividad n:1 Obra

Actividad.belongsToMany(Material, {through:Actividad_Material});
Material.belongsToMany(Actividad, {through:Actividad_Material});

Actividad.belongsToMany(Equipo, {through: Actividad_Equipo})
Equipo.belongsToMany(Actividad, {through: Actividad_Equipo}) 

Actividad.belongsToMany(Herramienta,{through : Actividad_Herramientas});
Herramienta.belongsToMany(Actividad,{through : Actividad_Herramientas});

Actividad.belongsToMany(Empleado,{through : Actividad_Empleado})
Empleado.belongsToMany(Actividad,{through : Actividad_Empleado})

exports.Herramienta = Herramienta;
exports.Obra = Obra;
exports.Actividad = Actividad; 
exports.Material = Material;
exports.Empleado = Empleado;
exports.Equipo = Equipo;
exports.Usuarios =  Usuarios;
exports.Empleado = Empleado;
exports.Actividad_Herramientas = Actividad_Herramientas;
exports.Actividad_Material = Actividad_Material;
exports.Actividad_Equipo = Actividad_Equipo;
exports.Actividad_Empleado = Actividad_Empleado;
exports.Sequelize = Sequelize;
exports.sequelize = sequelize;

