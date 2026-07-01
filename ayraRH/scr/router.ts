import { Router } from 'express'

//importação dos controladores
import { UsuariosC } from './controllers/usuarios/UsuariosC'
import { SetorC } from './controllers/setor/SetorC'
import { EmpresaC } from './controllers/empresa/EmpresaC'

//instansiar todas as funcionalidades do Router
const router = Router()

//Criação dos EndPoints
//Rotas de Usuarios
router.post('/cadastrarUsuarios', new UsuariosC().cadastrarUsuarios)

//Rotas de Setor
router.post('/cadastrarSetor', new SetorC().cadastrarSetor)

//Rotas de Empresa
router.post('/cadastrarEmpresa', new EmpresaC().cadastrarEmpresa)

export default router