const connect = require('../db/conexao');
const {hash} = require('bcrypt')
const UsuarioSchema = require('../db/schemas/UsuarioSchema');

class UsuariosServices{
    constructor(){
        this.conexao = connect;
        this.usuarios = UsuarioSchema;
    }

    async CreateService(req, res){
        const {nome, email, senha} = req.body;
        try{
            await this.conexao();
            const senhaHash = await hash(senha,11);
            const usuarios = await this.usuarios.create({
                nome,
                email, 
                senha: senhaHash
            })
            const {senha: senhaUsuarioCriado, ...resto } = usuarios._doc;
            return res.status(201).json({usuarios: resto})
        }catch(error){
            console.log(error)
            return res.status(400).json(error)
        }
    }
}

module.exports = UsuariosServices;