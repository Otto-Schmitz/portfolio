# Portfólio | Dev Backend

Projeto de portfólio em formato de **terminal** e interface estilo **macOS (Finder)**. Em constante atualização: novos projetos e experiências serão incluídos ao longo do tempo.

---

## Índice

- [Screenshots](#screenshots)
- [Idiomas suportados](#idiomas-suportados)
- [Seções por idioma (link de acesso)](#seções-por-idioma-link-de-acesso)
- [Sobre o projeto](#sobre-o-projeto)
- [Stack](#stack)
- [Como rodar](#como-rodar)

---

## Screenshots

*(Adicione os prints da aplicação na pasta `docs/screenshots/` com os nomes abaixo para que apareçam aqui.)*

| Modo Terminal | Modo Finder (GUI) |
|---------------|------------------|
| ![Terminal](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| Modo escuro (Finder) | Configurações (idioma e tema) |
|----------------------|-------------------------------|
| ![Modo escuro](docs/screenshots/03-dark-mode.png) | ![Configurações](docs/screenshots/04-settings.png) |

**Sugestão de arquivos em `docs/screenshots/`:**
- `01-terminal.png` — Tela principal no modo terminal (comando `ls`, prompt)
- `02-finder.png` — Interface estilo macOS com sidebar e pastas
- `03-dark-mode.png` — Mesma interface com tema escuro ativado
- `04-settings.png` — Modal de configurações (idioma e modo escuro)

---

## Idiomas suportados

A aplicação está disponível nos seguintes idiomas (alterável pelo comando `lang` no terminal ou pelo botão de configurações na interface):

| Código | Idioma |
|--------|--------|
| **pt-BR** | Português (Brasil) |
| **en** | English |
| **zh** | 中文 (Chinês) |
| **ko** | 한국어 (Coreano) |
| **ja** | 日本語 (Japonês) |
| **de** | Deutsch (Alemão) |
| **es** | Español (Espanhol) |

---

## Seções por idioma (link de acesso)

Ao publicar o projeto (ex.: Vercel, Netlify), preencha o link de acesso no início de cada seção abaixo.

---

### Português (Brasil)

**Link de acesso:** *(preencher quando publicado — ex.: https://seu-portfolio.vercel.app)*

Conteúdo descrito nas seções [Sobre o projeto](#sobre-o-projeto), [Stack](#stack) e [Como rodar](#como-rodar).

---

### English

**Access link:** *(fill in when published — e.g. https://your-portfolio.vercel.app)*

Content described in [About the project](#sobre-o-projeto), [Stack](#stack), and [How to run](#como-rodar).

---

### 中文 (Chinês)

**访问链接：** *(发布后填写 — 例如 https://your-portfolio.vercel.app)*

内容见 [关于项目](#sobre-o-projeto)、[技术栈](#stack) 和 [如何运行](#como-rodar)。

---

### 한국어 (Coreano)

**접속 링크:** *(배포 후 입력 — 예: https://your-portfolio.vercel.app)*

내용은 [프로젝트 소개](#sobre-o-projeto), [스택](#stack), [실행 방법](#como-rodar)을 참고하세요.

---

### 日本語 (Japonês)

**アクセスリンク:** *(公開時に記入 — 例: https://your-portfolio.vercel.app)*

内容は [プロジェクトについて](#sobre-o-projeto)、[スタック](#stack)、[実行方法](#como-rodar) を参照してください。

---

### Deutsch (Alemão)

**Zugriffslink:** *(nach Veröffentlichung ausfüllen — z. B. https://your-portfolio.vercel.app)*

Inhalt siehe [Über das Projekt](#sobre-o-projeto), [Stack](#stack) und [Lokal starten](#como-rodar).

---

### Español (Espanhol)

**Enlace de acceso:** *(completar al publicar — ej. https://your-portfolio.vercel.app)*

Contenido descrito en [Sobre el proyecto](#sobre-o-projeto), [Stack](#stack) y [Cómo ejecutar](#como-rodar).

---

## Sobre o projeto

Este repositório é um **portfólio pessoal** que apresenta experiência, habilidades, projetos e formas de contato. O projeto está em **constante atualização**: à medida que novos projetos forem criados e novas experiências forem concluídas, o conteúdo será atualizado aqui.

**Diferenciais da interface:**

- **Modo Terminal:** navegação por comandos (`ls`, `cd`, `cat`, `open`, `help`, `lang`, `theme`, `gui`, etc.) por seções (about, career, skills, projects, contact).
- **Modo Finder (GUI):** interface inspirada no macOS, com pastas na barra lateral e conteúdo no painel principal.
- **Alternância:** é possível trocar entre terminal e GUI pelo comando `gui` no terminal ou pelos ícones do dock.
- **Internacionalização:** suporte a 7 idiomas (pt-BR, en, zh, ko, ja, de, es), alterável nas configurações ou pelo comando `lang`.
- **Tema claro/escuro:** toggle nas configurações (ícone de engrenagem no header da GUI).

---

## Stack

- **[Next.js](https://nextjs.org)** 16 (App Router)
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **Fontes:** [Geist](https://vercel.com/font) (sans e mono)

Sem bibliotecas de UI ou de estado global: contexto para modo (terminal/GUI), idioma e tema; estilos com Tailwind e CSS customizado.

---

## Como rodar

**Requisitos:** Node.js 18+ e npm (ou yarn/pnpm).

1. Clone o repositório e entre na pasta do projeto:

```bash
git clone <url-do-repositorio>
cd portifolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

**Outros comandos:**

- `npm run build` — build de produção
- `npm run start` — servidor de produção (após `npm run build`)
- `npm run lint` — ESLint

---

## Licença

Uso pessoal / portfólio. Consulte o repositório para mais detalhes.
