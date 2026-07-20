import { Request, Response } from 'express'
import { CargosServices } from '../../services/Cargos/CargosServices'


class CargosControllers {
    async cadastrarCargos(req: Request, res: Response) {
        const { nome, id_empresa} = req.body
        const enviarDadosServices = new CargosServices
        const resposta = await enviarDadosServices.cadastrarCargos(nome, id_empresa)
        return res.json(resposta)
    }
}

export { CargosControllers }