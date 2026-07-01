import { Router } from 'express'

//importação dos controladores
import { UsuariosC } from './controllers/usuarios/UsuariosC'

//instansiar todas as funcionalidades do Router
const router = Router()

//Criação dos EndPoints
//Rotas de Usuarios
router.post('/cadastrarUsuarios', new UsuariosC().cadastrarUsuarios)

//Rotas de Setor
router.post('/cadastrarSetor', new SetorS().cadastrarSetor)

//Rotas de Empresa
router.post('/cadastrarEmpresa', new EmpresaS().cadastrarEmpresa)

export default router