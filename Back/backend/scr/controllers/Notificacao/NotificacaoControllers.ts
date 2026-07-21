import { Request, Response } from 'express'
import { NotificacaoServices } from '../../services/Notificacao/NotificacaoServices'

class NotificacaoControllers {
    async cadastrarNotificacao(req: Request, res: Response) {
        const { canal, mensagem, id_escalas, id_funcionario } = req.body
        const enviarDadosServices = new NotificacaoServices()
        const resposta = await
            enviarDadosServices.cadastrarNotificacao({
                canal,
                mensagem,
                id_escalas,
                id_funcionario
            })
        return res.json(resposta)
    }
}

export { NotificacaoControllers }