var express = require("express")
var router = express.Router()
const Empleado = require("../model/Empleado")

//Se obtienen todas las equipos
router.get("/empleados",(req,res)=>{
    Empleado.findAll()
        .then(empleados=>{
            res.json(empleados)
        })
        .catch(err=>{
            res.send("error: "+error)
        })
})

router.post("/empleados",(req,res)=>{
    if(!req.body.apPaterno && !req.body.apMaterno && !req.body.nombre && !req.body.telefono && !req.body.domicilio){
        res.status(400)
        res.json({
            error:"No se llenaron todos los campos"
        })
    }else{
        Empleado.create(req.body)
        .then(()=>{
            res.send("Empleado agregado")
        })
        .catch(err =>{
            res.send("Error: "+err)
        })
    }
})
router.put("/empleados/:id",(req,res) =>{
        Empleado.update(
            {
            apPaterno: req.body.apPaterno,
            apMaterno: req.body.apMaterno,
            nombre : req.body.nombre,
            telefono: req.body.telefono,
            domicilio: req.body.domicilio,
            },
            {where: {id: req.params.id}}
        )
        .then(()=>{
            res.send("Empleado actualizada")
        })
        .catch(err =>{
            res.send("Error: "+err)
        }) 
    
})
router.delete("/empleados/:id", (req,res) => {
    Empleado.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Empleado eliminado!")
    })
    .catch(err => {
        res.send("error")
    })
})

module.exports = router