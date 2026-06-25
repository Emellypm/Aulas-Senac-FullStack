interface cadUsuarios {
    nome: String,
    email: String,
    senha: String,
    cargo: String,
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, cargo}: cadUsuarios) {
        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { UsuariosServices }