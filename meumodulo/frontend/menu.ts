export const ModuleMenu = [
    {
        id: 'meumodulo-main',
        name: 'Meu Módulo',
        icon: 'Box',
        href: '/modules/meumodulo/pages/dashboard',
        order: 10,
        group: 'meumodulo',
        roles: ['ADMIN', 'SUPER_ADMIN', 'USER'],

        children: [
            {
                id: 'meumodulo-dashboard',
                name: 'Dashboard',
                href: '/modules/meumodulo/pages/dashboard',
                icon: 'BarChart3',
                order: 1
            },
            {
                id: 'meumodulo-lista',
                name: 'Lista',
                href: '/modules/meumodulo/pages/lista',
                icon: 'List',
                order: 2
            },
            {
                id: 'meumodulo-configuracoes',
                name: 'Configurações',
                href: '/modules/meumodulo/pages/configuracoes',
                icon: 'Settings',
                order: 3
            }
        ]
    }
];
