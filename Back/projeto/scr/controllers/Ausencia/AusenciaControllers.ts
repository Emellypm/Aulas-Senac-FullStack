import { Request, Response } from 'express'
import { AusenciaServices } from '../../services/Ausencia/AusenciaSevices'

class AusenciaControllers {
    async cadastrarAusencia(req: Request, res: Response) {
        const { data, tipo, motivo, sugerido_por_ia, id_funcionarios } = req.body
        const enviarDadosServices = new AusenciaServices()
        const resposta = await
            enviarDadosServices.cadastrarAusencia({
                data,
                tipo,
                motivo,
                sugerido_por_ia,
                id_funcionarios
            })
        return res.json(resposta)
    }
}

export { AusenciaControllers }