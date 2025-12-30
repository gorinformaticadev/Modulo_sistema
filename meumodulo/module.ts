import { ModuleContract } from '@core/contracts/ModuleContract';
import { CoreContext } from '@core/context/CoreContext';
import { ModulePermissions } from './backend/permissions';

export const MeuModuloModule: ModuleContract = {
    name: 'Meu Módulo',
    slug: 'meumodulo',
    version: '1.0.0',

    displayName: 'Meu Módulo',
    description: 'Módulo personalizado com funcionalidades integradas.',
    author: 'Equipe CORE',

    register(ctx: CoreContext) {
        console.log('[MeuModulo] Inicializando módulo...');

        if (ModulePermissions.permissions) {
            console.log('   Permissões carregadas');
        }

        ctx.events.on('notifications:register', () => {
            ctx.notifier.send('meumodulo-channel', {
                type: 'info',
                title: 'Meu Módulo',
                message: 'Módulo carregado com sucesso.',
            }, []);
        });

        ctx.events.on('menu:register', () => {
            ctx.menu.add({
                id: 'meumodulo-config',
                label: 'Configurações do Módulo',
                href: '/modules/meumodulo/configuracoes',
                icon: 'Settings',
                order: 10,
                permissions: ['meumodulo.view']
            });
        });

        console.log('[MeuModulo] Módulo registrado com sucesso.');
    }
};
