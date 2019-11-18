var express = require("express")
var router = express.Router()
const db = require('../database/db')

router.post("/actividad_empleados/:idActividad/:idEmpleado",(req,res)=>{
    CrearEmpleadoActividad(req.params.idActividad,req.params.idEmpleado)
    .then(()=>{
        res.send("Empleado agregado a la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})

const CrearEmpleadoActividad = async function (actividadId, empleadoId){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let empleado = await db.Empleado.findAll({where:{id:empleadoId}});
    actividad[0].addEmpleados(empleado[0].id, {
    });
    return actividad;
}

const GetEmpleadoActividad = async function (req,res){
    let actividad = await db.Actividad.findAll({where:{id:req.params.id}});
    let empleados = await actividad[0].getEmpleados();
    res.json(empleados);
}

router.get("/actividad_empleados/:id",(req,res)=>{
    GetEmpleadoActividad(req,res);
})

const EliminarEmpleadoActividad = async function (actividadId,idEmpleado){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    actividad[0].removeEmpleados(idEmpleado, {
    });
    return actividad;
}

router.delete("/actividad_empleados/:id/:idEmpleado",(req,res)=>{
    EliminarEmpleadoActividad(req.params.id,req.params.idEmpleado)
    .then(()=>{
        res.send("Empleado eliminado de la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports = router;