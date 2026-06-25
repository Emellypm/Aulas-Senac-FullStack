import prismaClient from "../../prisma/PrismaClient"

interface cadUsuarios {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, telefone }: cadUsuarios) {

        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone
            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { UsuariosServices }