import prismaClient from "../../prisma/PrismaClient"

interface cadUsuarios {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    id_cargos: string,
    id_empresas: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, telefone, id_cargos, id_empresas }: cadUsuarios) {
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
        if (emailExiste) {
            throw new Error("E-mail já Cadastrado")
        }

        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone,
                id_cargos: id_cargos,
                id_empresas: id_empresas

            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { UsuariosServices }