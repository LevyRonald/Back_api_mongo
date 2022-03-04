const UsuariosServices = require ('../services/UsuariosServices');

class UsuariosControllers{
    constructor(){
        this.services = new UsuariosServices();
    }

    async createController(req, res){
        const {nome, email, senha} = req.body
        if (!nome || !email || !senha){
            return res.status(400).json({error: "falta dados para a requisição!!"})
        }
        return this.services.CreateService(req, res)
    }

    async gelAllController(req, res){
        return this.services.getUsuariosService(req, res);
    }

    async showController(req, res){
        const {email} = req.body
        if(!email){
            return res.status(400).json({error: "Coloque um email cadastrado!"})
        }
        return this.services.showUsuarioService(req, res);
    }
}

module.exports = UsuariosControllers;