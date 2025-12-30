import MeuModuloDashboardPage from './pages/dashboard';
import MeuModuloListaPage from './pages/lista';
import MeuModuloConfiguracoesPage from './pages/configuracoes';

const MODULE_ROOT = '/meumodulo';

export const ModuleRoutes = [
    { path: `${MODULE_ROOT}/dashboard`, component: MeuModuloDashboardPage },
    { path: `${MODULE_ROOT}/lista`, component: MeuModuloListaPage },
    { path: `${MODULE_ROOT}/configuracoes`, component: MeuModuloConfiguracoesPage },
];
