const User = require("../model/user");

exports.getAllUsers = function (req, res) {
  res.status(200).json(User.findAll());  
}
const getUsuario = function(req,response){
    console.log(req.params)
  if(req.params.id)
  {
      User.findById(req.params.id)
      .then((e) => {
          response.status(200).json(e);
      }).catch(err => {
          response.status(404).json(err);
      }) 
  }
  else
  {
      response.status(404).json({error : 'Error'});
  }
  
}

const createUsuario = function(req,response){
  if(req.params.id != User.findById(req.params.id))
  {
      User.add(req.body)
      .then((e) => { ///Valor que regresa el await
          response.status(200).json(e);
      }).catch((e) => {
          response.status(404).json(e);
      }) 
  }
  else{
      response.status(404).json({error : 'Error'});
  }
 
}
exports.createUsuario = createUsuario;
exports.getUsuario = getUsuario;
