import PrismaClient from '../../prisma/PrismaClient'

interface cadUsuarios {
    nome: string
    email: string
    senha: string
    id_empresa: string
    id_setor: string

}

class UsuariosS {
    async cadastrarUsuarios({ nome, email, senha, id_empresa, id_setor }: cadUsuarios) {
        const emailExiste = await PrismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })
        if (emailExiste) {
            throw new Error("E-mail já Cadastrado")
        }
        await PrismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                id_empresa: id_empresa,
                id_setor: id_setor
            }
        })
        return ({ dados: "Dados salvos com sucesso" })
    }
}
export { UsuariosS }