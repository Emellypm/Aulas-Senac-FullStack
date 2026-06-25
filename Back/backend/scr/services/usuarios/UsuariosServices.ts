import prismaClient from "../../prisma/PrismaClient"

interface cadUsuarios {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, telefone }: cadUsuarios){
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
            if(emailExiste) {
                throw new Error("E-mail já Cadastrado")
            }

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