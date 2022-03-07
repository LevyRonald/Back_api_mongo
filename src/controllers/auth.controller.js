const AuthServices = require ('../services/auth.service');

class AuthController{
    #_services;

    constructor(){
        this.#_services = new AuthServices();
    }

    async loginController(req, res){
        if(!req.body.email || !req.body.senha){
            return res.status(401).json({ error: "Email ou senha invalido" })
        }
        return this.#_services.login(req, res);
    }
};

module.exports = AuthController;