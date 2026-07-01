import { Request, Response } from 'express'
import { EmpresaS } from '../../services/empresa/EmpresaS'

class EmpresaC{
    async cadastrarEmpresa(req:Request, res:Response){
        const {nome, cnpj, segmento } = req.body
        const enviarDadosServices = new EmpresaS()
        const resposta = await enviarDadosServices.cadastrarEmpresa({

            nome,
            cnpj,
            segmento
        
        })
        return res.json(resposta)
    }
}

export {EmpresaS}