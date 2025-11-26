# Task Manager - Frontend

Este é o frontend do projeto **Task Manager**, uma aplicação para gerenciamento de tarefas, desenvolvida com React, TypeScript e Vite.

## 📋 Descrição

O Task Manager permite criar, visualizar, atualizar e excluir tarefas de forma simples e intuitiva. O frontend consome uma API desenvolvida em NestJS (localizada na pasta `backend/`).

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Docker](https://www.docker.com/)

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

## ⚙️ Estrutura de Pastas

```
frontend/
├── Dockerfile
├── public/                # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e outros assets
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── TaskForm.tsx
│   │   └── TaskItem.tsx
│   ├── services/          # Serviços de API
│   │   └── api.ts
│   ├── types/             # Tipagens TypeScript
│   │   └── index.ts
│   ├── App.tsx            # Componente principal
│   ├── App.css
│   ├── main.tsx           # Ponto de entrada
│   └── index.css
├── package.json           # Dependências e scripts
└── vite.config.ts         # Configuração do Vite
```

## 📑 Funcionalidades

- Listar tarefas
- Criar nova tarefa
- Editar tarefa existente
- Excluir tarefa
- Interface responsiva
- Integração com API REST
- Hot reload em desenvolvimento

## 🔗 Backend

O backend está localizado na pasta `../backend` e é iniciado automaticamente pelo Docker Compose. Consulte o README do backend para mais informações sobre a API.

## 👤 Autor

- [Mateus Andrade](https://github.com/mattandrade87)
