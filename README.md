# Marketplace de Trocas de Cartas

Aplicação web desenvolvida para simular um marketplace de troca de cartas entre usuários.

O sistema permite que usuários registrem suas cartas, publiquem propostas de troca e interajam com outras ofertas disponíveis no marketplace.

Este projeto foi desenvolvido como parte de um teste técnico Front-End, consumindo uma API pública fornecida no desafio.

## 📦 Regras de Produto

Durante o desenvolvimento da aplicação, foi definida uma regra de produto para tornar o marketplace de trocas funcional e significativo para os usuários.

### 🎴 Starter Pack

Ao iniciar no sistema, os usuários recebem um conjunto inicial de cartas (starter pack). Esse conjunto permite que o usuário:

- Tenha cartas iniciais para participar do sistema

- Publique propostas de troca

- Interaja com o marketplace desde o início

### 🔁 Aquisição de Novas Cartas

Após o starter pack inicial, novas cartas são obtidas prioritariamente através do sistema de trocas entre usuários.

Esse comportamento garante que:

- O marketplace seja o principal mecanismo de progressão

- Os usuários precisem interagir entre si para expandir suas coleções

- O sistema de trocas tenha valor real dentro da aplicação

## Funcionalidades

### 👤 Autenticação

- Registro de novos usuários

- Login com autenticação via JWT

- Persistência da sessão do usuário

### 🃏 Coleção de Cartas

- Visualização das cartas disponíveis no sistema

- Adição de cartas à coleção do usuário

- Listagem das cartas do usuário logado

### 🔁 Sistema de Trocas

- Criação de propostas de troca

- Definição de:
  - cartas oferecidas

  - cartas desejadas

### 📡 Feed de Trocas

- Visualização das propostas públicas de troca

- Exibição das cartas oferecidas e solicitadas

### 🔎 Filtros

- Marketplace → mostra trocas de outros usuários

- Minhas Trocas → mostra trocas criadas pelo usuário logado

### ✅ Confirmação de Troca

- Usuário só pode confirmar trocas se possuir as cartas necessárias

- Usuário não pode confirmar a própria troca

### 🎨 Interface

- Interface responsiva

- Componentização da UI

- Feedback visual de carregamento

## 🛠 Tecnologias Utilizadas

### Frontend

- React
- Vite
- TypeScript
- TailwindCSS

### Gerenciamento de Estado

- Zustand

### Fetch de dados

- React Query

### Requisições HTTP

- Axios

### UI e Utilidades

- Lucide React (ícones)

- React Hot Toast (notificações)

## ⚙️ Como Executar o Projeto

1. #### Clonar o repositório

   `git clone https://github.com/heitorl/cards-marketplace.git`

2. #### Entrar na pasta do projeto

   `cd cards-marketplace`

3. #### Instalar dependências

   `npm install`

4. #### Rodar a aplicação
   `npm run dev`

#### A aplicação estará disponível em:

http://localhost:5173

## 🌐 API Utilizada

Este projeto consome a API disponibilizada no desafio técnico.

Base URL:

https://cards-marketplace-api.onrender.com

## Estrutura do Projeto

```
src
 ├── components
 ├── hooks
 ├── services
 ├── store
 ├── pages
 └── types
```

- components → componentes reutilizáveis

- hooks → hooks de integração com API

- services → camada de chamadas HTTP

- store → gerenciamento de estado global

- types → tipagens TypeScript
