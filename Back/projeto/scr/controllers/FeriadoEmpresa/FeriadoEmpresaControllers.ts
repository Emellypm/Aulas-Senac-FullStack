import { Request, Response } from 'express'
import { FeriadoNServices } from '../../services/FeriadoNacional/FeriadoNServices'
import { FeriadoEmpresaServices } from '../../services/FeriadoEmpresa/FeriadoEServices'

class FeriadoEmpresaControllers {
    async cadastrarFeriado(req: Request, res: Response) {
        const {  nome, data, recorrente, status, id_empresas, id_feriado_nacional } = req.body
        const enviarDadosFeriado = new FeriadoEmpresaServices()
        const resposta = await enviarDadosFeriado.cadastrarFeriado({
            nome,
            data,
            recorrente,
            status,
            id_empresas,
            id_feriado_nacional
        })
        return res.json(resposta)
    }
}
export {FeriadoEmpresaControllers}