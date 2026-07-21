import prismaClient from "../../prisma/PrismaClient"

interface cadAusencia{
    data: string,
    tipo: string,
    motivo: string,
    sugerido_por_ia: boolean
    id_funcionarios: string
}

class AusenciaServices {
    async cadastrarAusencia({ data,tipo, motivo, sugerido_por_ia, id_funcionarios }: cadAusencia) {
        await prismaClient.ausencia.create({
            data: {
                data: data,
                tipo: tipo,
                motivo: motivo,
                sugerido_por_ia: sugerido_por_ia,
                id_funcionarios: id_funcionarios

            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { AusenciaServices }