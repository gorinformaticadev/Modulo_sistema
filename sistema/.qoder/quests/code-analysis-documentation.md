# Documentação do Módulo Sistema - @modules/sistema

## Visão Geral do Projeto

O módulo Sistema é um componente essencial de um sistema multitenant que fornece funcionalidades de infraestrutura, monitoramento e configurações globais. Este módulo faz parte de uma arquitetura modular baseada em monorepo, onde diferentes funcionalidades são encapsuladas em módulos independentes que se integram ao sistema principal.

## Estrutura do Projeto

### Visão Geral da Arquitetura
```
packages/modules/sistema/
├── package.json          # Definição do pacote NPM (@modules/sistema)
├── tsconfig.json         # Configuração de TypeScript
├── index.ts              # Ponto de entrada principal (Exports)
├── module.ts             # Definição do módulo Backend (NestJS Module)
├── permissions.ts        # Definição de permissões do módulo
├── module.config.json    # Configuração do módulo (JSON)
├── frontend/             # Código executado no Browser (Next.js)
│   ├── index.tsx         # Definição do módulo frontend (FrontendModuleDefinition)
│   ├── components/       # Componentes React (Widgets, Pages)
│   │   ├── SistemaDashboard.tsx
│   │   └── SistemaWidget.tsx
│   ├── pages/            # Páginas lazy-loaded (ex: /sistema/ajustes)
│   │   ├── ajustes/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── modelNotification/
│   │       └── page.tsx
│   ├── services/         # Serviços frontend (ex: notificationTestService.ts)
│   │   └── notificationTestService.ts
│   ├── menu.ts           # Definição do menu lateral
│   └── routes.tsx        # Definição de rotas do frontend
└── backend/              # Código executado no Servidor (NestJS)
    ├── controllers/      # Controladores NestJS
    │   └── sistema.controller.ts
    ├── dto/              # Objetos de transferência de dados
    │   └── sistema.dto.ts
    ├── services/         # Serviços NestJS
    │   └── sistema.service.ts
    ├── migrations/       # Scripts de migração de banco de dados
    │   ├── 001_create_tables.sql
    │   └── 002_create_notification_table.sql
    ├── seeds/            # Dados de seed
    │   └── seed.sql
    ├── cron.service.ts   # Serviço de tarefas agendadas
    ├── controller.ts     # Controlador de configurações
    ├── routes.ts         # Definição de rotas do backend
    └── sistema.module.ts # Módulo NestJS principal
```

## Documentação Detalhada dos Componentes

### 1. Arquivo Principal - module.ts

Este arquivo define o manifesto do módulo sistema, que é o contrato de integração com o Core do sistema.

**Função:**
- Define metadados do módulo (nome, descrição, versão)
- Contém a função de registro que é chamada durante a inicialização do sistema
- Registra permissões, menus e listeners de eventos

**Detalhes da Implementação:**
- `name`: Nome do módulo como "Sistema"
- `slug`: Identificador único como "sistema"
- `register()`: Função que é executada quando o módulo é carregado
  - Registra permissões no sistema ACL
  - Adiciona notificação na barra superior
  - Adiciona item no menu do usuário para configurações

### 2. Permissões - backend/permissions.ts

Define as permissões que este módulo adiciona ao sistema ACL (Access Control List).

**Permissões Disponíveis:**
- `sistema.view`: Permite visualizar o módulo sistema (disponível para ADMIN, USER, GUEST)
- `sistema.create`: Permite criar configurações no sistema (apenas ADMIN)
- `sistema.edit`: Permite editar configurações do sistema (apenas ADMIN)
- `sistema.delete`: Permite excluir configurações do sistema (apenas ADMIN)
- `sistema.admin`: Permite administrar o módulo sistema (apenas ADMIN)

### 3. Configuração do Módulo - backend/module.config.json

Arquivo JSON que define a configuração do módulo com informações estruturais e de configuração.

**Campos Principais:**
- `name`: Nome do módulo como "sistema"
- `slug`: Slug único para o módulo
- `displayName`: Nome amigável para exibição
- `version`: Versão do módulo
- `description`: Descrição do módulo
- `config.defaultSettings`: Configurações padrão do módulo
- `config.permissions`: Lista de permissões do módulo
- `config.routes`: Definições de rotas do módulo
- `config.menuItems`: Itens de menu do módulo
- `config.database`: Configurações relacionadas ao banco de dados

### 4. Frontend - frontend/index.tsx

Define a estrutura do módulo frontend que se integra ao sistema principal.

**Componentes Importantes:**
- `FrontendModuleDefinition`: Interface que define como o módulo se integra ao sistema
- `SistemaWidget`: Componente React que é exibido no dashboard

**Estrutura do Widget:**
- `id`: Identificador único do widget ('sistema-status')
- `type`: Tipo de visualização ('summary_card')
- `title`: Título do card ('Status do Sistema')
- `component`: O componente React real a ser renderizado
- `gridSize`: Tamanho na grid (largura x altura)
- `order`: Ordem de prioridade na exibição
- `icon`: Nome do ícone (Lucide)

### 5. Componente Dashboard - frontend/components/SistemaDashboard.tsx

Componente React que exibe o dashboard do módulo sistema.

**Funcionalidades:**
- Interface de dashboard para o módulo sistema
- Layout responsivo com grid
- Exibição de informações do módulo

### 6. Componente Widget - frontend/components/SistemaWidget.tsx

Componente React que exibe o status do sistema no dashboard.

**Funcionalidades:**
- Mostra a saúde geral dos serviços do sistema em tempo real
- Exibe um indicador visual de 100% de operação
- Utiliza componentes UI como Card para exibir informações
- Usa ícones Lucide para melhor experiência visual

### 7. Página de Configurações - frontend/pages/ajustes/page.tsx

Página que permite configurar notificações agendadas do sistema.

**Funcionalidades:**
- Formulário para criar novos agendamentos de notificação
- Opções para definir título, conteúdo e público-alvo
- Configuração de frequência (diária, semanal, mensal, intervalo)
- Lista de agendamentos ativos
- Integração com API para salvar e recuperar configurações

### 8. Página do Dashboard - frontend/pages/dashboard/page.tsx

Página que exibe o dashboard do módulo sistema.

**Funcionalidades:**
- Interface principal do módulo sistema
- Componentes organizados em layout responsivo

### 9. Página de Modelos de Notificação - frontend/pages/modelNotification/page.tsx

Página que permite criar e enviar notificações manuais para diferentes públicos.

**Funcionalidades:**
- Interface para criação de notificações manuais
- Seletor de tipo de notificação (info, success, warning, error)
- Seletor de público-alvo (todos os usuários, apenas admins, etc.)
- Seletor de escopo (global ou por empresa)
- Filtro e seleção de empresas para notificação específica
- Pré-visualização da notificação antes do envio
- Integração com serviço de notificação

### 10. Serviço de Notificação - frontend/services/notificationTestService.ts

Serviço frontend que fornece funcionalidades para envio de notificações e obtenção de tenants.

**Tipos Disponíveis:**
- `NotificationType`: Tipos de notificação (info, success, warning, error)
- `NotificationTarget`: Público-alvo (all_users, admins_only, super_admins)
- `NotificationScope`: Escopo da notificação (global, tenants)

**Interface:**
- `CreateNotificationDto`: DTO para criação de notificação

**Métodos Disponíveis:**
- `sendNotification()`: Envia uma notificação com base nos dados fornecidos
- `getTenants()`: Obtém a lista de tenants para seleção

### 11. Menu do Módulo - frontend/menu.ts

Define a estrutura de navegação que será injetada na Sidebar.

**Estrutura do Menu:**
- Item principal com ID 'sistema-main'
- Rótulo 'Suporte' com ícone de fones de ouvido
- Link para suporte via WhatsApp
- Sub-itens do menu: Dashboard, Notificações e Ajustes
- Cada item tem ID, nome, ícone, rota e ordem de exibição
- Configuração de permissões para cada item

### 12. Rotas do Frontend - frontend/routes.tsx

Mapeia rotas HTTP para Componentes React (Páginas).

**Funcionalidades:**
- Define rotas para o módulo sistema
- Mapeia caminhos para componentes específicos
- Usa prefixo padrão para isolamento de rota
- Inclui rotas para dashboard, modelo de notificação e ajustes

### 13. DTO - backend/dto/sistema.dto.ts

Objetos de Transferência de Dados para operações do módulo sistema.

**Classes Disponíveis:**
- `CreateSistemaDto`: DTO para criação de registros
- `UpdateSistemaDto`: DTO para atualização de registros
- `FilterSistemaDto`: DTO para filtragem de registros

### 14. Backend - controllers/sistema.controller.ts

Controlador NestJS que define as rotas da API para o módulo sistema.

**Endpoints Disponíveis:**
- `GET /api/sistema`: Recupera todos os registros do módulo sistema
- `GET /api/sistema/stats`: Recupera estatísticas do módulo sistema

**Segurança:**
- Usa guards JWT e de roles para proteger os endpoints
- Aplica autenticação e verificação de permissões

### 15. Serviço Backend - services/sistema.service.ts

Serviço que contém a lógica de negócios do módulo sistema.

**Métodos Disponíveis:**
- `findAll()`: Recupera todos os registros do módulo sistema com base no tenantId
- `getStats()`: Retorna estatísticas do módulo sistema (nome, versão, status)

### 16. Módulo NestJS - backend/sistema.module.ts

Define o módulo NestJS que agrupa os componentes do backend.

**Componentes Importados:**
- `CronModule`: Módulo para gerenciamento de tarefas agendadas
- `PrismaModule`: Módulo para acesso ao banco de dados

**Providers:**
- `SistemaCronService`: Serviço para tarefas agendadas

**Controllers:**
- `SistemaConfigController`: Controlador para configurações do sistema

### 17. Controlador de Configurações - backend/controller.ts

Controlador que gerencia as configurações de notificação do sistema.

**Endpoints Disponíveis:**
- `GET /modules/sistema/config/notifications`: Recupera configurações de notificação
- `POST /modules/sistema/config/notifications`: Cria nova configuração de notificação

**Funcionalidades:**
- Acesso protegido para super administradores
- Consulta direta ao banco de dados para recuperação de dados
- Registro de tarefas agendadas após criação de configuração

### 18. Rotas do Backend - backend/routes.ts

Exporta os controllers que devem ser registrados pelo NestJS.

**Funcionalidade:**
- Faz a exportação dos controllers do módulo
- Permite injeção automática das rotas no AppModulesModule
- Mantém o array de controllers para registro dinâmico

### 19. Serviço de Tarefas Agendadas - backend/cron.service.ts

Serviço que gerencia tarefas agendadas para envio de notificações automáticas.

**Funcionalidades:**
- Criação de tabela de agendamento de notificações se não existir
- Registro de tarefas agendadas com base em expressões cron
- Execução de notificações automáticas conforme agendamento
- Limpeza de tarefas orfas

**Processos Automáticos:**
- Verificação e criação de tabela de agendamento
- Registro de tarefas agendadas ativas
- Execução de notificações conforme agendamento
- Limpeza de tarefas desativadas ou excluídas

### 20. Migrações de Banco de Dados

#### 001_create_tables.sql
Cria a tabela de configurações do sistema com campos para:
- ID único (UUID)
- Tenant ID (para suporte multitenant)
- Chave e valor da configuração
- Datas de criação e atualização
- Índices para otimização de consultas

#### 002_create_notification_table.sql
Cria a tabela de agendamento de notificações com campos para:
- ID único (UUID)
- Título e conteúdo da notificação
- Público-alvo (audience)
- Expressão cron para agendamento
- Status de ativação
- Datas de criação e atualização

## Como Reproduzir este Módulo

### 1. Configuração Inicial

Para reproduzir este módulo, siga os passos abaixo:

1. **Criar a estrutura de diretórios:**
   - Crie a pasta do módulo com as subpastas frontend e backend
   - Configure os arquivos de configuração básicos (package.json, tsconfig.json)

2. **Definir o manifesto do módulo:**
   - Crie o arquivo module.ts com as informações do módulo
   - Implemente a função register para integração com o Core

3. **Configurar permissões:**
   - Defina as permissões necessárias no arquivo permissions.ts
   - Especifique quais papéis têm acesso a cada funcionalidade

4. **Adicionar configuração do módulo:**
   - Crie o arquivo module.config.json com informações estruturais
   - Defina configurações padrão, permissões, rotas e itens de menu

### 2. Implementação Frontend

1. **Criar o componente widget:**
   - Implemente o componente React que será exibido no dashboard
   - Use componentes UI para uma interface consistente

2. **Definir a estrutura do módulo frontend:**
   - Crie o arquivo frontend/index.tsx
   - Registre o widget na definição do módulo

3. **Implementar páginas de configuração:**
   - Crie páginas para gerenciamento de funcionalidades do módulo
   - Adicione formulários e listagens conforme necessário

4. **Criar componentes de dashboard:**
   - Implemente o componente SistemaDashboard para a página principal
   - Defina o menu lateral com o arquivo menu.ts
   - Configure as rotas do frontend com o arquivo routes.tsx

5. **Desenvolver serviços frontend:**
   - Crie serviços como o notificationTestService para funcionalidades específicas
   - Implemente lógica de negócio no frontend quando apropriado

### 3. Implementação Backend

1. **Criar controladores:**
   - Implemente endpoints para as funcionalidades do módulo
   - Adicione proteção de autenticação e autorização

2. **Desenvolver serviços:**
   - Implemente a lógica de negócios em serviços separados
   - Use injeção de dependência do NestJS

3. **Configurar módulo NestJS:**
   - Registre controladores e provedores no módulo
   - Importe módulos necessários para funcionalidades

4. **Criar DTOs:**
   - Defina objetos de transferência de dados para validação de entrada
   - Crie classes para criação, atualização e filtragem de dados

5. **Criar migrações:**
   - Defina scripts SQL para criar tabelas necessárias
   - Inclua índices para otimização de consultas

6. **Implementar serviços de tarefas agendadas:**
   - Crie serviços para tarefas que devem ser executadas automaticamente
   - Use expressões cron para agendamento de tarefas

7. **Definir rotas do backend:**
   - Exporte os controllers para registro automático
   - Use o arquivo routes.ts para facilitar a injeção de rotas

### 4. Integração com o Sistema Principal

1. **Registro no ModuleLoader:**
   - O módulo frontend precisa ser registrado no ModuleLoader da aplicação principal
   - Use a interface FrontendModuleDefinition para integração

2. **Validação de permissões:**
   - As permissões definidas devem ser reconhecidas pelo sistema ACL
   - Certifique-se de que os papéis estejam corretamente configurados

3. **Configuração do menu:**
   - O menu definido em menu.ts deve ser integrado ao sistema principal
   - As rotas definidas devem estar disponíveis no router principal

## Considerações de Segurança

- Todos os endpoints do backend estão protegidos por autenticação JWT
- As permissões são verificadas usando guards do NestJS
- Acesso a dados é filtrado por tenantId para garantir isolamento multitenant
- As expressões cron são validadas para prevenir injeção de código
- As entradas de usuário são validadas através de DTOs

## Recursos Adicionais

- O módulo usa Lucide-react para ícones
- Componentes UI são importados de um sistema de design compartilhado
- O sistema suporta internacionalização (embora não explicitamente configurado neste módulo)
- A arquitetura permite extensibilidade com novos widgets e funcionalidades
- O sistema inclui mecanismos de notificação tanto programadas quanto manuais
- Há suporte para notificações segmentadas por tenant e papel de usuário