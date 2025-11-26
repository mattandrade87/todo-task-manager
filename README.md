# Task Manager

Este repositório contém o projeto **Task Manager**, uma aplicação  para gerenciamento de tarefas (Todo List), composta por três módulos principais:

- **backend/**: API RESTful desenvolvida com NestJS, Prisma ORM e PostgreSQL.
- **frontend/**: Interface web desenvolvida com React, TypeScript e Vite.
- **Docker**: Containerização completa da aplicação com Docker Compose.

---

## 📦 Estrutura do Projeto

```
├── backend/            # API (NestJS, Prisma, PostgreSQL)
├── frontend/           # Frontend (React, Vite, TypeScript)
├── docker-compose.yml  # Orquestração dos containers
└── README.md           # Este arquivo
```

---

## 🚀 Tecnologias Utilizadas

- **Docker & Docker Compose**
- **Node.js**
- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **React**
- **TypeScript**
- **Vite**

---

## 🐳 Executando com Docker (Recomendado)

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



## 📝 Funcionalidades

- **CRUD de Tarefas** (criar, listar, atualizar, remover)
- **Validação de dados**
- **Persistência com banco de dados PostgreSQL**
- **Interface web responsiva**
- **Deploy simplificado com Docker**
- **Hot reload em desenvolvimento**

---

## 🛠️ Estrutura dos Serviços Docker

A aplicação utiliza três containers:

- **db**: PostgreSQL 16 Alpine
- **backend**: API NestJS com Prisma
- **frontend**: Interface React com Vite

Todos os serviços são orquestrados pelo Docker Compose e se comunicam através de uma rede bridge interna.

---

## 📂 Documentação Detalhada

- [Backend - README](./backend/README.md)
- [Frontend - README](./frontend/README.md)

---

## 👤 Autor

- [Mateus Andrade](https://github.com/mattandrade87)
