interface cadUsuarios {
    nome: String,
    email: String,
    senha: String,
    telefone: String,
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, telefone }: cadUsuarios) {
        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { UsuariosServices }