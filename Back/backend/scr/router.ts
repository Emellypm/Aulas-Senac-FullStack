import { Router } from 'express'

//Importação do Controladores
import { UsuariosControllers } from './controllers/Usuarios/UsuariosControllers'
import { EmpresasControllers } from './controllers/Empresas/EmpresasControllers'
import { FuncionariosControllers } from './controllers/Funcionarios/FuncionariosControllers'
import { SetoresControllers } from './controllers/Setores/SetoresControllers'
import { EscalasControllers } from './controllers/escalas/EscalaControllers'
import { AusenciaControllers } from './controllers/Ausencia/AusenciaControllers'
const router = Router()

//Criação dos EndPoints

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)

router.post('/CadastrarSetores', new SetoresControllers().cadastrarSetores)

router.post('/CadastrarEmpresas', new EmpresasControllers().cadastrarEmpresas)

router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)

router.post('/CadastrarEscalas', new EscalasControllers().cadastrarEscalas)

router.post('/CadastrarAusencia', new AusenciaControllers().cadastrarAusencia)

router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)

router.post('/VisualizarUsuarioUnicoPost', new UsuariosControllers().visualizarUsuarioUnicoPost)

export default router
