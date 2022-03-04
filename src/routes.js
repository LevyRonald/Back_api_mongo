const express = require("express");
const UsuariosControllers = require('./controllers/UsuariosControllers');

const usuariosControllers = new UsuariosControllers();

const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.status(200).json("olá mundo")
})

routes.route('/usuarios')
    .post((req, res) =>{
        return usuariosControllers.createController(req, res)
    })
    .get(async (req, res)=> await usuariosControllers.gelAllController(req, res))

routes.route('/usuarios/show')
    .get(async (req, res)=> await usuariosControllers.showController(req, res))


module.exports = routes;