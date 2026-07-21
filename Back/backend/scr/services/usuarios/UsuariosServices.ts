import prismaClient from "../../prisma/PrismaClient"

interface cadUsuarios {
    nome: string,
    email: string,
    senha: string,
    role: number,
    id_empresas: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, role, id_empresas }: cadUsuarios) {
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
                role: role,
                id_empresas: id_empresas

            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { UsuariosServices }