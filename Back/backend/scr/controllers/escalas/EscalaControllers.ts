import { Request, Response } from 'express'
import { EscalasServices } from '../../services/escalas/EscalasServices'
class EscalasControllers {
    async cadastrarEscalas(req: Request, res: Response) {
        const { data, turno, hora_inicio, hora_fim, tipo, gerado_por, id_empresas, id_funcionarios } = req.body
        const enviarDadosServices = new EscalasServices()
        const resposta = await
            enviarDadosServices.cadastrarEscalas({
                data,
                turno,
                hora_inicio,
                hora_fim,
                tipo,
                gerado_por,
                id_empresas,
                id_funcionarios
            })
        return res.json(resposta)
    }
}

export { EscalasControllers }