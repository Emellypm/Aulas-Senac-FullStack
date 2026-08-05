import { Request, Response } from 'express'
import { FeriadoNServices } from '../../services/FeriadoNacional/FeriadoNServices' 

class FeriadoNacionalControllers {
    async cadastrarFeriado(req: Request, res: Response) {
        const { nome, data, recorrente, tipo } = req.body
        const enviarDadosFeriado = new FeriadoNServices()
        const resposta = await
            enviarDadosFeriado.cadastrarFeriado({
                nome,
                data,
                recorrente,
                tipo
            })
        return res.json(resposta)
    }
}

export { FeriadoNacionalControllers }