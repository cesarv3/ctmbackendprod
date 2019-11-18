var express = require("express")
var router = express.Router()
const db = require('../database/db')

router.post("/actividad_materiales/:idActividad/:idMaterial",(req,res)=>{
    console.log(req.params.idActividad,req.params.idMaterial, req.body.cantidad);
    CrearMaterialActividad(req.params.idActividad,req.params.idMaterial, req.body.cantidad)
    .then(()=>{
        res.send("Material agregado a la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})

const CrearMaterialActividad = async function (actividadId, idMaterial,cantidadMaterial){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let material = await db.Material.findAll({where:{id:idMaterial}});
    actividad[0].addMateriales(material[0].id, {
        through: {
            cantidad: cantidadMaterial
        }
    });
    return actividad;
}

const GetHerramientaMaterial = async function (req,res){
    let actividad = await db.Actividad.findAll({where:{id:req.params.id}});
    let materiales = await actividad[0].getMateriales();
    res.json(materiales);
}

router.get("/actividad_materiales/:id",(req,res)=>{
    GetHerramientaMaterial(req,res);
})

const EliminarMaterialActividad = async function (actividadId,materialId){
    let actividad = await db.Actividad.findAll({where:{id:actividadId}});
    let material = await db.Material.findAll({where:{id:materialId}});
    actividad[0].removeMateriales(material[0].id, {
    });
    return actividad;
}

router.delete("/actividad_materiales/:idActividad/:idMaterial",(req,res)=>{
    EliminarMaterialActividad(req.params.idActividad,req.params.idMaterial)
    .then(()=>{
        res.send("Material eliminado de la actividad!");
    })
    .catch((err)=>{
        res.send(err);
    })
})
 
module.exports = router;