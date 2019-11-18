var express = require("express")
var router = express.Router()
const db = require('../database/db')
 
router.post("/actividad_equipos/:idActividad/:idEquipo",(req,res)=>{
    CrearEquipoActividad(req.params.idActividad,req.params.idEquipo)
    .then(()=>{
        res.send("Equipo agregado a la actividad");
    })
    .catch((err)=>{
        res.send(err);
    })
})

const CrearEquipoActividad = async function (actividadId, equipoId){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let equipo = await db.Equipo.findAll({where:{id:equipoId}});
    actividad[0].addEquipos(equipo[0].id, {
    });
    return actividad;
}

const GetEquipoActividad = async function (req,res){
    let actividad = await db.Actividad.findAll({where:{id:req.params.id}});
    let equipos = await actividad[0].getEquipos();
    res.json(equipos);
}

router.get("/actividad_equipos/:id",(req,res)=>{
    GetEquipoActividad(req,res);
})

const EliminarEquipoActividad = async function (actividadId,equipoId){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let equipo = await db.Equipo.findAll({where:{id:equipoId}});
    actividad[0].removeEquipos(equipo[0].id, {
    });
    return actividad;
}

router.delete("/actividad_equipos/:idActividad/:idEquipo",(req,res)=>{
    EliminarEquipoActividad(req.params.idActividad,req.params.idEquipo)
    .then(()=>{
        res.send("Actividad eliminada de la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports = router;