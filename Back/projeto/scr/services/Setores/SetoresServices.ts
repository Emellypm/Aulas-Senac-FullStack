import prismaClient from "../../prisma/PrismaClient"

interface cadSetores{
    nome: string,
    min_funcionarios_turno: number,
    id_empresas: string
}

class SetoresServices {
    async cadastrarSetores({ nome, min_funcionarios_turno, id_empresas }: cadSetores) {
        await prismaClient.setores.create({
            data: {
                nome: nome,
                min_funcionarios_turno: min_funcionarios_turno,
                id_empresas: id_empresas

            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { SetoresServices }