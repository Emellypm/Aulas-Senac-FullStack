import prismaClient from "../../prisma/PrismaClient"

interface cadastrarFuncionarios {
    nome: string,
    cpf: string,
    turno: string
    cargo: string
    carga_horaria_semana: number
    id_empresas: string
    id_usuarios: string
    id_setores: string

}

class FuncionariosServices {
    async cadastrarFuncionarios({ nome, cpf, turno,cargo, carga_horaria_semana, id_empresas, id_usuarios, id_setores }: cadastrarFuncionarios) {
        await prismaClient.funcionarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                turno: turno,
                cargo: cargo,
                carga_horaria_semana,
                id_empresas: id_empresas,
                id_usuarios: id_usuarios,
                id_setores: id_setores
            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { FuncionariosServices }