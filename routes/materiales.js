var express = require("express")
var router = express.Router()
const Material = require("../model/Material")

//Se obtienen todas las obras
router.get("/materiales",(req,res)=>{
    Material.findAll()
        .then(materiales=>{
            res.json(materiales)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})

//AQUI PODEMOS AGREGAR UNA BUSQUEDA POR UN ID FORANEA
/*
router.get("/materiales/:idObra",(req,res)=>{
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
*/

router.post("/materiales",(req,res)=>{
    if(!req.body.nombre && !req.body.precio && !req.body.unidad){
        res.status(400)
        res.json({
            error:"No se llenaron todos los campos"
        })
    }else{
        Material.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            unidad: req.body.unidad
        })
        .then(()=>{
            res.send("Material agregada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        })
    }
})
router.put("/materiales/:id",(req,res) =>{
        Material.update(
            {nombre: req.body.nombre,
            precio: req.body.precio,
            unidad: req.body.unidad},
            {where: {id: req.params.id}}
        )
        .then(()=>{
            res.send("Material actualizada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        }) 
    
})
router.delete("/materiales/:id", (req,res) => {
    Material.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Material eliminada!")
    })
    .catch(err => {
        res.send("error")
    })
})

//METODOS


module.exports = router