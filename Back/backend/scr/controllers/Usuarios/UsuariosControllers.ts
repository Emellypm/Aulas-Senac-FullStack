import { Request, Response } from 'express'
import { UsuariosServices } from '../../services/usuarios/UsuariosServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, telefone, id_cargos, id_empresas } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await
            enviarDadosServices.cadastrarUsuarios({
                nome,
                email,
                senha,
                telefone,
                id_cargos,
                id_empresas
            })
        return res.json(resposta)
    }
}

export { UsuariosControllers }