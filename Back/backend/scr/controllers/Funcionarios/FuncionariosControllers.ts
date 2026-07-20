import { Request, Response } from 'express'
import { UsuariosServices } from '../../services/usuarios/UsuariosServices'
import { EmpresasServices } from '../../services/Empresas/EmpresasServices'
import { FuncionariosServices } from '../../services/Funcionarios/FuncionariosServices'


class FuncionariosControllers {
    async cadastrarFuncionarios(req: Request, res: Response) {
        const { nome, cpf, turno,id_cargos,id_usuarios,id_empresas} = req.body
        const enviarDadosServices = new FuncionariosServices()
        const resposta = await
            enviarDadosServices.cadastrarFuncionarios({
                nome,
                cpf,
                turno,
                id_cargos,
                id_usuarios,
                id_empresas
            })
        return res.json(resposta)
    }
}

export { FuncionariosControllers }