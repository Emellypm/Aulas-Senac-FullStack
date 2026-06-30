import { Router } from 'express'

//importação dos controladores
import { UsuariosControllers } from './controllers/Usuarios/UsuariosControllers'
import { CargosControllers}  from './controllers/Cargos/CargosControllers'

//instansiar todas as funcionalidades do Router
const router = Router()

//criação das rotas de EndPoint
//usuarios
router.post('/cadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
//cargos
router.post('/cadastrarCargos', new CargosControllers().cadastrarCargos)



export default router
