import prismaClient from "../../prisma/PrismaClient"

interface cadFeriado{
    nome: string,
    data: number,
    recorrente: boolean,
    tipo: string
}

class FeriadoNServices {
    async cadastrarFeriado ({ nome, data, recorrente,tipo }: cadFeriado) {
        await prismaClient.feriado_nacional.create({
            data: {
                nome: nome,
                data: data,
                recorrente: recorrente,
                tipo: tipo
            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { FeriadoNServices}