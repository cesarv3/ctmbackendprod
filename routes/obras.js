var express = require("express")
var router = express.Router()
const Obra = require("../model/Obra")

//Se obtienen todas las obras
router.get("/obras",(req,res)=>{
    Obra.findAll()
        .then(obras=>{
            res.json(obras)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})

router.post("/obras",(req,res)=>{
    if(!req.body.nombre && !req.body.descripcion && !req.body.ubicacion){
        res.status(400)
        res.json({
            error:"No se llenaron todos los campos"
        })
    }else{
        Obra.create(req.body)
        .then(()=>{
            res.send("Obra agregada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        })
    }
})
router.put("/obras/:id",(req,res) =>{
        Obra.update(
            {nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            ubicacion: req.body.ubicacion},
            {where: {id: req.params.id}}
        )
        .then(()=>{
            res.send("Obra actualizada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        }) 
    
})
router.delete("/obras/:id", (req,res) => {
    Obra.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Obra eliminada!")
    })
    .catch(err => {
        res.send("error")
    })
})

module.exports = router