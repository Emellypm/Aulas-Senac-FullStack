import { Router } from 'express'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'
import { EmpresasControllers } from './controllers/Empresas/EmpresasControllers'
import { FuncionariosControllers } from './controllers/Funcionarios/FuncionariosControllers'
const router = Router()

//Criação dos EndPoints
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)

//Rotas de Cargos
router.post('/CadastrarCargos', new CargosControllers().cadastrarCargos)

router.post('/CadastrarEmpresas', new EmpresasControllers().cadastrarEmpresas)

router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)



export default router
