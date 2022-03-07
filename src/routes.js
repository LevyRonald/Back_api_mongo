const express = require("express");
const UsuariosControllers = require('./controllers/UsuariosControllers');
const AuthControllers = require('./controllers/auth.controller');
const Middleware = require('./middlewares/validateToken.js');
const usuariosControllers = new UsuariosControllers();
const authControllers = new AuthControllers();

const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.status(200).json("olá mundo")
})

routes.route('/usuarios')
    .post((req, res) =>{
        return usuariosControllers.createController(req, res)
    })

routes.route('/login')
    .post(async (req, res) => await authControllers.loginController(req, res))

routes.use(new Middleware().validateToken)


routes.route('/usuarios')
    .get(async (req, res)=> await usuariosControllers.gelAllController(req, res))

routes.route('/usuarios/show')
    .get(async (req, res)=> await usuariosControllers.showController(req, res))

routes.route('/deletar')
    .delete(async (req, res)=> await usuariosControllers.deleteController(req, res))

module.exports = routes;