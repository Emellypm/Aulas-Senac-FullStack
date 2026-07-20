import prismaClient from "../../prisma/PrismaClient"

interface cadastrarFuncionarios {
    nome: string,
    cpf: string,
    turno: string
    id_empresas: string
    id_usuarios: string
    id_cargos: string

}

class FuncionariosServices {
    async cadastrarFuncionarios({ nome, cpf, turno, id_empresas, id_usuarios, id_cargos }: cadastrarFuncionarios) {
        await prismaClient.funcionarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                turno: turno,
                id_empresas: id_empresas,
                id_usuarios: id_usuarios,
                id_cargos: id_cargos
            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { FuncionariosServices }