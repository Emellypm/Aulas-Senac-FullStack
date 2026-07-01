import { Request, Response } from 'express'
import { SetorS } from '../../services/setor/SetorS'


class SetorC{
    async cadastrarSetor(req: Request, res:Response) {
        const {nome, turno,id_empresa} = req.body
        const enviarDadosServices = new SetorS()
        const resposta = await enviarDadosServices.cadastrarSetor({
            nome, turno, id_empresa
        })
    }
}

export {SetorC}

