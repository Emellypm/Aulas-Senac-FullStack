import { Request, Response } from 'express'
import { UsuariosServices } from '../../services/usuarios/UsuariosServices'
import { EmpresasServices } from '../../services/Empresas/EmpresasServices'

class EmpresasControllers {
    async cadastrarEmpresas(req: Request, res: Response) {
        const { nome, cnpj, segmento, escala } = req.body
        const enviarDadosServices = new EmpresasServices()
        const resposta = await
            enviarDadosServices.cadastrarEmpresas({
                nome,
                cnpj,
                segmento,
                escala
            })
        return res.json(resposta)
    }
}

export { EmpresasControllers }