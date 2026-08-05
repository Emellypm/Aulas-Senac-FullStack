import prismaClient from "../../prisma/PrismaClient"

interface cadNotificacao {
    canal: string,
    mensagem: string
    id_escalas: string,
    id_funcionario: string
}

class NotificacaoServices {
    async cadastrarNotificacao({ canal, mensagem, id_escalas, id_funcionario }: cadNotificacao) {
        await prismaClient.notificacao.create({
            data: {
                canal: canal,
                mensagem: mensagem,
                id_escalas: id_escalas,
                id_funcionario: id_funcionario

            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { NotificacaoServices}