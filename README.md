# Liga Acadêmica de Games do CEUMA

Frontend inicial do portal da Liga Acadêmica de Games do CEUMA.

O projeto começa com uma base simples para apresentar a liga e preparar as primeiras áreas públicas, sem autenticação, backend ou CRUD nesta etapa.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- npm

## Como instalar

Instale as dependências do projeto:

```bash
npm install
```

## Como rodar localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse `http://localhost:3000` no navegador.

## Lint

Execute a verificação de lint:

```bash
npm run lint
```

## Estrutura inicial

```text
src/
  app/
    admin/
      page.tsx
    aluno/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
  constants/
  lib/
  types/
```

## Rotas iniciais

- `/` - página inicial pública da liga.
- `/aluno` - placeholder da área do aluno.
- `/admin` - placeholder da área administrativa.

## Próximos passos planejados

- Definir identidade visual e componentes base do portal.
- Criar página de trilhas da liga.
- Planejar a área do aluno sem implementar login ainda.
- Planejar a área administrativa sem backend ou CRUD ainda.
- Adicionar testes quando as primeiras funcionalidades forem definidas.
