import { Request, Response } from "express";
import { UsuariosS } from '../../services/usuarios/UsuariosS';

class UsuariosC {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, id_empresa, id_setor } = req.body;
        const enviarDadosServices = new UsuariosS();
        const resposta = await 
        enviarDadosServices.cadastrarUsuarios({
            nome,
            email,
            senha,
            id_empresa,
            id_setor
        });
        return res.json(resposta);
    }
}

export { UsuariosC }