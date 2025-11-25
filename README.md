# Task Manager

Este repositório contém o projeto **Task Manager**, uma aplicação completa para gerenciamento de tarefas (Todo List), composta por dois módulos principais:

- **backend/**: API RESTful desenvolvida com NestJS, Prisma ORM e PostgreSQL.
- **frontend/**: Interface web desenvolvida com React, TypeScript e Vite.

---

## 📦 Estrutura do Projeto

```
├── backend/   # API (NestJS, Prisma, PostgreSQL)
├── frontend/  # Frontend (React, Vite, TypeScript)
└── README.md  # Este arquivo
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **React**
- **TypeScript**
- **Vite**

---

## 🔧 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/mattandrade87/todo-task-manager.git
cd todo-task-manager
```

### 2. Backend (API)

Veja instruções detalhadas em [`backend/README.md`](./backend/README.md), mas o fluxo básico é:

```bash
cd backend
npm install
# Configure o arquivo .env conforme exemplo em .env.example ou no README do backend
npx prisma migrate dev --name init
npm run start:dev
```

A API estará disponível em `http://localhost:3000` (por padrão).

### 3. Frontend (Web)

Veja instruções detalhadas em [`frontend/README.md`](./frontend/README.md), mas o fluxo básico é:

```bash
cd frontend
npm install
# Configure o arquivo .env conforme exemplo em .env.example ou no README do frontend
npm run dev
```

Acesse a aplicação em [http://localhost:5173](http://localhost:5173).

---

## 📝 Funcionalidades

- **CRUD de Tarefas** (criar, listar, atualizar, remover)
- **Validação de dados**
- **Persistência com banco de dados**
- **Interface web responsiva**

---

## 📂 Documentação

- [Backend - README](./backend/README.md)
- [Frontend - README](./frontend/README.md)

---

## 👤 Autor

- [Mateus Andrade](https://github.com/mattandrade87)
