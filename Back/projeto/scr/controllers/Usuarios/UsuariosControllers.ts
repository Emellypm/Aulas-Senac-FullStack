import { Request, Response } from 'express'
import { UsuariosServices } from '../../services/usuarios/UsuariosServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, role, id_empresas } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await
            enviarDadosServices.cadastrarUsuarios({
                nome,
                email,
                senha,
                role,
                id_empresas
            })
        return res.json(resposta)
    }
    async visualizarDadosGeral(req: Request, res: Response){
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.visualizarDadosGeral()
        return res.json(resposta)
    }
    async visualizarUsuarioUnicoPost(req: Request, res: Response){
        const {id} = req.body
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.visualizarUsuarioUnicoPost(id)
        return res.json(resposta)
    }
}

export { UsuariosControllers }