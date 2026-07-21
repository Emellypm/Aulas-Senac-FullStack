import { Request, Response } from 'express'
import { EmpresasServices } from '../../services/Empresas/EmpresasServices'

class EmpresasControllers {
    async cadastrarEmpresas(req: Request, res: Response) {
        const { nome, cnpj, segmento, tipo_escala } = req.body
        const enviarDadosServices = new EmpresasServices()
        const resposta = await
            enviarDadosServices.cadastrarEmpresas({
                nome,
                cnpj,
                segmento,
                tipo_escala
            })
        return res.json(resposta)
    }
}

export { EmpresasControllers }