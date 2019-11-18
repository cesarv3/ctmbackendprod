const db = require("./database/db.js");

const addObra = async function(nuevaObra)
{
    const nuevoRegistro = await db.Obra.create({
        nombre: nuevaObra.nombre,
        descripcion: nuevaObra.descripcion,
        ubicacion: nuevaObra.ubicacion
    });
    return nuevoRegistro;
}
exports.addObra = addObra;

const updateObra = async function(id,registro)
{
   let actualizarNombre = await db.Obra.update({
        nombre: registro.nombre,
        descripcion: registro.descripcion,
        ubicacion : registro.ubicacion
        },{
            where : {
                id : id
            }
        })
   return actualizarNombre;
}
exports.updateObra = updateObra;

