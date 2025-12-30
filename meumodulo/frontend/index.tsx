import React from 'react';
import { FrontendModuleDefinition } from '@/lib/module-types';
import { MeuModuloWidget } from './components/MeuModuloWidget';
export { default as MeuModuloConfiguracoesPage } from './pages/configuracoes';

export const MeuModuloModule: FrontendModuleDefinition = {
    id: 'meumodulo',
    name: 'Meu Módulo',

    widgets: [
        {
            id: 'meumodulo-status',
            type: 'summary_card',
            title: 'Status Meu Módulo',
            component: MeuModuloWidget,
            gridSize: { w: 1, h: 1 },
            order: 1,
            icon: 'Box'
        }
    ]
};
