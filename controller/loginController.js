const jwt = require('jsonwebtoken');
const User = require('../model/user');
const llave = require("../auth/llave");

exports.login = function(req, res) {
  let registro = req.body;
  console.log(registro);
  const {username, password } = registro;
  if ( !(username && password) ) {
    res.status(400).json({ msg: `Formato incorrecto: ${JSON.stringify(req.body)}` });
    return;
  }
  User.findOne(username)
  .then((user) => {
    console.log(user[0].password);
    if (!user[0]) {
      res.status(401). json({msg: "Usuario no encontrado"});
      return;
    }
    if (user[0].password !== password) {
      res.status(401).json({msg: 'Password incorrecto'});
      return;
    }
    console.log(llave);
    let token = jwt.sign({id: user[0].id}, llave);
    res.json({msg:"ok", token: token,user: user[0].id});
  }).catch((error) => {
    console.log('Error') 
  });

}