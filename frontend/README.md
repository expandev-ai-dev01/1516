# DataFlow

Sistema simples e intuitivo para gerenciamento de registros, permitindo criar, visualizar, editar e excluir informações com praticidade.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e lógica compartilhada
│   ├── components/        # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── utils/            # Funções utilitárias
│   ├── types/            # Tipos globais
│   └── constants/        # Constantes globais
├── domain/               # Domínios de negócio
├── pages/                # Páginas da aplicação
│   └── layouts/          # Layouts compartilhados
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- **Interface Intuitiva**: Interface amigável e responsiva com navegação simplificada
- **Criação de Registros**: Formulários intuitivos com validação de dados
- **Visualização de Registros**: Consulta com filtros e ordenação
- **Edição de Registros**: Modificação com histórico de alterações
- **Exclusão de Registros**: Remoção com opções de exclusão lógica ou física

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **App**: Configuração e inicialização da aplicação
- **Core**: Componentes e lógica reutilizáveis
- **Domain**: Lógica de negócio organizada por domínio
- **Pages**: Componentes de página para roteamento

## API Integration

O projeto está configurado para integração com API REST:

- **Public endpoints**: `/api/v1/external/*` (sem autenticação)
- **Authenticated endpoints**: `/api/v1/internal/*` (com token)

## Padrões de Código

- TypeScript strict mode habilitado
- ESLint configurado para React e TypeScript
- Tailwind CSS para estilização
- Componentes funcionais com hooks
- Lazy loading de páginas para otimização