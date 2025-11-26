# Task Manager API (Backend)

Esta é a API RESTful do projeto Task Manager, desenvolvida para gerenciar tarefas (Todo List). O projeto foi construído utilizando **NestJS** e segue uma arquitetura em camadas com validação de dados e tratamento de exceções.

## 🚀 Tecnologias Utilizadas

- **Node.js** (Runtime)
- **NestJS** (Framework)
- **TypeScript** (Linguagem)
- **Prisma ORM** (Interação com Banco de Dados)
- **PostgreSQL**
- **Class Validator** (Validação de DTOs)
- **Docker** (Containerização)


---

## 🐳 Executando com Docker (Recomendado)

A forma recomendada de executar o frontend é através do Docker Compose na raiz do projeto. O frontend será iniciado automaticamente junto com o backend e banco de dados.

### Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### 1. Clone o repositório

```bash
 git clone https://github.com/mattandrade87/todo-task-manager.git
 cd todo-task-manager
```

### 2. Execute o comando abaixo para subir todos os serviços:

```bash
 docker-compose up
```

### 3. Acesse a aplicação:
	- **Frontend**: [http://localhost:5173](http://localhost:5173)
	- **Backend API**: [http://localhost:3000](http://localhost:3000)
	- **PostgreSQL**: `localhost:5432`

---

## 📁 Estrutura do Projeto

```
backend/
├── Dockerfile
├── docker-entrypoint.sh
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
└── src/
    ├── app.module.ts
    ├── main.ts
    ├── prisma/
    │   ├── prisma.module.ts
    │   └── prisma.service.ts
    └── tasks/
        ├── tasks.controller.ts
        ├── tasks.module.ts
        ├── tasks.service.ts
        └── dto/
            ├── create-task.dto.ts
            └── update-task.dto.ts
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
- **Containerização** com Docker para deploy simplificado

## 🔗 API Endpoints

- `GET /tasks` - Lista todas as tarefas
- `GET /tasks/:id` - Busca tarefa por ID
- `POST /tasks` - Cria nova tarefa
- `PATCH /tasks/:id` - Atualiza tarefa
- `DELETE /tasks/:id` - Remove tarefa

## 👤 Autor

- [Mateus Andrade](https://github.com/mattandrade87)
