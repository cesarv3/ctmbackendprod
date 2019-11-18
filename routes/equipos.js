var express = require("express")
var router = express.Router()
const Equipo = require("../model/Equipo")

//Se obtienen todas las equipos
router.get("/equipos",(req,res)=>{
    Equipo.findAll()
        .then(equipos=>{
            res.json(equipos)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})

router.post("/equipos",(req,res)=>{
    if(!req.body.nombre && !req.body.descripcion){
        res.status(400)
        res.json({
            error:"No se llenaron todos los campos"
        })
    }else{
        Equipo.create(req.body)
        .then(()=>{
            res.send("Equipo agregado")
        })
        .catch(err =>{
            res.send("Error: "+err)
        })
    }
})
router.put("/equipos/:id",(req,res) =>{
        Equipo.update(
            {nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            },
            {where: {id: req.params.id}}
        )
        .then(()=>{
            res.send("Equipo actualizada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        }) 
    
})
router.delete("/equipos/:id", (req,res) => {
    Equipo.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Equipo eliminado!")
    })
    .catch(err => {
        res.send("error")
    })
})

module.exports = router