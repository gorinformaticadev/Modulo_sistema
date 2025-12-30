export const ModulePermissions = {
    driver: 'acl',
    permissions: [
        {
            slug: 'meumodulo.view',
            name: 'Visualizar Meu Módulo',
            description: 'Permite visualizar o módulo meumodulo',
            roles: ['ADMIN', 'USER', 'GUEST']
        },
        {
            slug: 'meumodulo.create',
            name: 'Criar Configurações',
            description: 'Permite criar configurações no meumodulo',
            roles: ['ADMIN']
        },
        {
            slug: 'meumodulo.edit',
            name: 'Editar Meu Módulo',
            description: 'Permite editar configurações do meumodulo',
            roles: ['ADMIN']
        },
        {
            slug: 'meumodulo.delete',
            name: 'Excluir Meu Módulo',
            description: 'Permite excluir configurações do meumodulo',
            roles: ['ADMIN']
        },
        {
            slug: 'meumodulo.admin',
            name: 'Administrar Meu Módulo',
            description: 'Permite administrar o módulo meumodulo',
            roles: ['ADMIN']
        }
    ]
};
