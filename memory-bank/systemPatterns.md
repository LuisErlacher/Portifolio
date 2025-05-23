# systemPatterns.md

## Arquitetura do Sistema

### Padrão de Design
- Componentes funcionais React com Hooks
- Componentes compostos para UI reutilizável
- Composição sobre herança
- Utility-first CSS com Tailwind

### Sistema de Cores
- Cores primárias definidas como variáveis CSS em App.css
- Variáveis HSL para facilitar manipulação de cores
- Classes Tailwind personalizadas para acessar as variáveis
- Tema claro/escuro controlado por classe 'dark' no elemento html

### Convenções de Nomeação
- Componentes: PascalCase
- Funções e variáveis: camelCase
- Arquivos de componentes: PascalCase.tsx
- Utilitários: camelCase.ts

### Composição de Componentes
- Uso de children e props para flexibilidade
- Camada de abstração para componentes de UI base
- Seções compostas por componentes menores
- Componentes de layout para estruturar páginas

(Descreva padrões de arquitetura, decisões técnicas e relações entre componentes.) 