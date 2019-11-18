const express = require('express');
const router = express.Router();
const passport = require("../auth/passport");

const userController = require("../controller/userController");
const loginController = require('../controller/loginController');

router.use(express.json());

router.post('/login', loginController.login);
router.post('/users',userController.createUsuario);
router.get('/users/:id', passport.authenticate("jwt",{session: false}),userController.getUsuario);

module.exports = router;