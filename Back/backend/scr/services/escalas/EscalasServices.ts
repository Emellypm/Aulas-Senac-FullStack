import prismaClient from "../../prisma/PrismaClient"

interface cadEscalas{
    data: string,
    turno: string,
    hora_inicio: string,
    hora_fim: string,
    tipo: string,
    gerado_por: string
    id_empresas: string,
    id_funcionarios: string
}

class EscalasServices {
    async cadastrarEscalas({ data,turno,hora_inicio,hora_fim,tipo,gerado_por, id_empresas,id_funcionarios }: cadEscalas) {
        await prismaClient.escalas.create({
            data: {
                data: data,
                turno: turno,
                hora_inicio: hora_inicio,
                hora_fim: hora_fim,
                tipo: tipo,
                gerado_por: gerado_por,
                id_empresas: id_empresas,
                id_funcionarios: id_funcionarios

            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { EscalasServices }