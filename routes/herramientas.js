var express = require("express")
var router = express.Router()
const Herramienta = require("../model/Herramienta")
//const db = require("../mantenerObra.js")

//Se obtienen todas las obras
router.get("/herramientas",(req,res)=>{
    Herramienta.findAll()
        .then(herramientas =>{
            res.json(herramientas)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})
router.post("/herramientas",(req,res)=>{
        Herramienta.create(req.body)
        .then(()=>{
            res.send("Herramienta agregada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        })
    
})
router.put("/herramientas/:id",(req,res) =>{
    Herramienta.update({
        nombre : req.params.nombre,
        descripcion: req.params.descripcion
    },
        {where: {id: req.params.id}}
    )
    .then(()=>{
        res.send("Herramienta actualizada")
    })
    .catch(err =>{
        res.send("Error: "+err)
    }) 
})
router.delete("/herramientas/:id", (req,res) => {
    Herramienta.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Herramienta eliminada!")
    })
    .catch(err => {
        res.send("error")
    })
})

module.exports = router