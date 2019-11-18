var express = require("express")
var router = express.Router()
const db = require('../database/db')

router.post("/actividad_herramientas/:idActividad/:idHerramienta",(req,res)=>{
    console.log(req.params.idActividad,req.params.idHerramienta, req.body.cantidad);
    CrearHerramientaActividad(req.params.idActividad,req.params.idHerramienta, req.body.cantidad)
    .then(()=>{
        res.send("Herramienta eliminado de la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})

const CrearHerramientaActividad = async function (actividadId, herramientaId, cantidadHerramienta){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let herramienta = await db.Herramienta.findAll({where:{id:herramientaId}});
    actividad[0].addHerramientas(herramienta[0].id, {
        through: {
            cantidad: cantidadHerramienta
        }
    });
    return actividad;
}

const GetHerramientaActividad = async function (req,res){
    let actividad = await db.Actividad.findAll({where:{id:req.params.id}});
    let herramientas = await actividad[0].getHerramientas();
    res.json(herramientas);
}

router.get("/actividad_herramientas/:id",(req,res)=>{
    GetHerramientaActividad(req,res);
})

const EliminarHerramientaActividad = async function (actividadId,herramientaId){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let herramienta = await db.Herramienta.findAll({where:{id:herramientaId}});
    actividad[0].removeHerramientas(herramienta[0].id, {
    });
    return actividad;
}

router.delete("/actividad_herramientas/:idActividad/:idHerramienta",(req,res)=>{
    EliminarHerramientaActividad(req.params.idActividad,req.params.idHerramienta)
    .then(()=>{
        res.send("Herramienta eliminado de la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})


module.exports = router;