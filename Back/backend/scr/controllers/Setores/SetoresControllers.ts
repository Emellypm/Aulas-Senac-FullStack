import { Request, Response } from 'express'
import { SetoresServices } from '../../services/Setores/SetoresServices'

class SetoresControllers {
    async cadastrarSetores(req: Request, res: Response) {
        const { nome, min_funcionarios_turno, id_empresas } = req.body
        const enviarDadosServices = new SetoresServices()
        const resposta = await
            enviarDadosServices.cadastrarSetores({
                nome,
                min_funcionarios_turno,
                id_empresas
            })
        return res.json(resposta)
    }
}

export { SetoresControllers }