# Task Manager - Frontend

Este é o frontend do projeto **Task Manager**, uma aplicação para gerenciamento de tarefas, desenvolvida com React, TypeScript e Vite.

## 📋 Descrição

O Task Manager permite criar, visualizar, atualizar e excluir tarefas de forma simples e intuitiva. O frontend consome uma API desenvolvida em NestJS (localizada na pasta `backend/`).

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)

## 🔗 Backend

O backend está localizado na pasta `../backend` e deve ser iniciado separadamente primeiro, antes do frontend ser iniciado. Consulte o README do backend para instruções.

## 📦 Instalação

1. Clone o repositório

   ```bash
   git clone https://github.com/mattandrade87/todo-task-manager.git
   ```

2. Acesse a pasta do frontend:
   ```bash
   cd frontend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configuração das Variáveis de Ambiente: Crie um arquivo .env na raiz da pasta backend. Você pode usar o exemplo abaixo ou o .env.example:

# .env

# Substitua os valores conforme suas credenciais do banco

VITE_API_URL=http://localhost:3000

## 🏃‍♂️ Executando o Projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

> **Nota:** Certifique-se de que o backend está rodando para que as requisições funcionem corretamente.

## ⚙️ Estrutura de Pastas

```
frontend/
├── public/                # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e outros assets
│   ├── components/        # Componentes React reutilizáveis
│   ├── services/          # Serviços de API
│   ├── types/             # Tipagens TypeScript
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Ponto de entrada
├── package.json           # Dependências e scripts
└── vite.config.ts         # Configuração do Vite
```

## 📑 Funcionalidades

- Listar tarefas
- Criar nova tarefa
- Editar tarefa existente
- Excluir tarefa
- Interface responsiva

## 👤 Autor

- [Mateus Andrade](https://github.com/mattandrade87)
