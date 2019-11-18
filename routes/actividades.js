var express = require("express")
var router = express.Router()
const Actividad = require("../model/Actividad")

//Se obtienen todas las obras
router.get("/actividades",(req,res)=>{
    Actividad.findAll()
        .then(actividades=>{
            res.json(actividades)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})
router.get("/actividades/:idObra",(req,res)=>{
    Actividad.findAll({
        where: {
            idObra: req.params.idObra
        }
    })
        .then(actividades=>{
            res.json(actividades)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})
router.post("/actividades",(req,res)=>{
    if((!req.body.descripcion) && (!req.body.idObra)){
        res.status(400)
        res.json({
            error:"No se llenaron todos los campos"
        })
        console.log(error)
    }else{
        Actividad.create({
            descripcion: req.body.descripcion,
            idObra: req.body.idObra,
            progreso: req.body.progreso
        })
        .then(()=>{
            res.send("Actividad agregada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        })
    }
})
router.put("/actividades/:id",(req,res) =>{
        Actividad.update(
            {descripcion : req.body.descripcion,
            progreso: req.body.progreso},
            {where: {id: req.params.id}}
        )
        .then(()=>{
            res.send("Actividad actualizada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        }) 
    
})
router.delete("/actividades/:id", (req,res) => {
    Actividad.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Actividad eliminada!")
    })
    .catch(err => {
        res.send("error")
    })
})

module.exports = router