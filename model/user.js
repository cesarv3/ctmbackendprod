const db = require("../database/db")

async function findAll()
{
  let usuarios = await db.Usuarios.findAll();
  return usuarios;
}

async function findOne(nombreUsuario)
{
  let usuarios = await db.Usuarios.findAll({
    where: {
      nombreUsuario : nombreUsuario
    }
  });
  return usuarios;
}

const findByPassword = async function(password){
  let usuarios = await db.Usuarios.findOne({
      where: { password : password }
  })
  return usuarios;
}
const findById = async function(id){
  let usuarios = await db.Usuarios.findOne({
      where: {id : id}
  })
  return usuarios;
}

const save  = async function(id,usuarios){
  let update = await db.Usuarios.update({
      nombreUsuario: usuarios.nombreUsuario,
      password : usuarios.password
  },{
      where:{
          id : id 
      }
  });
  return update;
}

const add = async function(nuevo){

      await db.Usuarios.create({
        nombreUsuario: nuevo.nombreUsuario,
        password : nuevo.password
      });
}

erase = async function(id)
{
  let elimina = await db.Usuarios.destroy({
      where : {
          id : id
      }
  });
  return elimina;
}

exports.findAll = findAll;
exports.findOne = findOne;
exports.findByPassword = findByPassword;
exports.findById = findById;
exports.add = add;
exports.save = save;
exports.erase = erase;
