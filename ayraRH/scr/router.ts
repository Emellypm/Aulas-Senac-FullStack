import { Router } from 'express'

//importação dos controladores
import { UsuariosC } from './controllers/usuarios/UsuariosC'

//instansiar todas as funcionalidades do Router
const router = Router()

//criação das rotas de EndPoint
router.post('/cadastrarUsuarios', new UsuariosC().cadastrarUsuarios)

export default router