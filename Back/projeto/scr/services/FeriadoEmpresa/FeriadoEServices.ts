import prismaClient from "../../prisma/PrismaClient"

interface cadFeriado {
    nome: string,
    data: string,
    recorrente: boolean,
    status: boolean,
    id_empresas: string,
    id_feriado_nacional: string
}

class FeriadoEmpresaServices {
    async cadastrarFeriado({ nome, data, recorrente, status, id_empresas, id_feriado_nacional }: cadFeriado) {
        await prismaClient.feriadoEmpresa.create({
            data: {
                nome: nome,
                data: data,
                recorrente:recorrente,
                status: status,
                id_empresas:id_empresas,
                id_feriado_nacional:id_feriado_nacional
            }

        })
        return ({ dados: 'Dados salvos com sucesso' })
    }
}
export {FeriadoEmpresaServices}