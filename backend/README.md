# Task Manager API (Backend)

Esta é a API RESTful do projeto Task Manager, desenvolvida para gerenciar tarefas (Todo List). O projeto foi construído utilizando **NestJS** e segue uma arquitetura em camadas com validação de dados e tratamento de exceções.

## 🚀 Tecnologias Utilizadas

- **Node.js** (Runtime)
- **NestJS** (Framework)
- **TypeScript** (Linguagem)
- **Prisma ORM** (Interação com Banco de Dados)
- **PostgreSQL**
- **Class Validator** (Validação de DTOs)

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)
- Um banco de dados PostgreSQL rodando localmente.

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/mattandrade87/todo-task-manager](https://github.com/mattandrade87/todo-task-manager)
   ```
2. **Acesse a pasta do backend:**

```bash
    cd nome-do-repositorio/backend
```

3. **Instale as dependências:**

```bash
    npm install
```

4. **Configuração das Variáveis de Ambiente:** Crie um arquivo .env na raiz da pasta backend. Você pode usar o exemplo abaixo:

# .env

# Substitua os valores conforme suas credenciais do banco

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
PORT=3000

5. **Configuração do Banco de Dados (Prisma):** Execute as migrações para criar as tabelas no banco de dados:

```bash
   npx prisma migrate dev --name init
```

6. **Para iniciar o servidor em modo de desenvolvimento (com auto-reload):**

```bash
    npm run start:dev
```

---

## 📁 Estrutura do Projeto

```
backend/
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── prisma.config.ts
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│       ├── migration_lock.toml
│       └── 20251125123052_init/
│           └── migration.sql
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   └── tasks/
│       ├── tasks.controller.ts
│       ├── tasks.module.ts
│       ├── tasks.service.ts
│       └── dto/
│           ├── create-task.dto.ts
│           └── update-task.dto.ts

```

## 📝 Funcionalidades do Backend

- **CRUD de Tarefas:**
  - Criar nova tarefa
  - Listar todas as tarefas
  - Buscar tarefa por ID
  - Atualizar tarefa existente
  - Remover tarefa
- **Validação de dados** com DTOs e class-validator
- **Persistência** usando Prisma ORM e PostgreSQL
- **Tratamento de erros** centralizado
- **Estrutura modular** com NestJS (controllers, services, modules)

## 👤 Autor

- [Mateus Andrade](https://github.com/mattandrade87)
