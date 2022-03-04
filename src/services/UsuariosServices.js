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
    async getUsuariosService(req, res){
        try {
            await this.conexao();
            const usuarios = await this.usuarios.find();
            const usuariosSemSenha = usuarios.map((value)=>{
                const { senha, ...usuariosSemSenha } = value._doc;
                return usuariosSemSenha;
            });
            return res.status(200).json({ usuarios: usuariosSemSenha })
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async showUsuarioService(req, res){
        const {email} = req.body;
        try {
            await this.conexao();
            const usuarios = await this.usuarios.findOne({ email });
                const { senha, ...usuariosSemSenha } = usuarios._doc;
            return res.status(200).json({ usuarios: usuariosSemSenha });
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = UsuariosServices;