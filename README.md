# Lista de Tarefas

Aplicação web para gerenciamento de tarefas pessoais, permitindo criar, completar e remover tarefas com persistência em um backend Node.js. Projeto desenvolvido em 2025 para aprendizado de React e integração com APIs.

## Funcionalidades

- **Criação de Tarefas**: Adicione tarefas com texto e categoria.
- **Completar Tarefas**: Marque tarefas como concluídas ou não concluídas.
- **Remoção de Tarefas**: Exclua tarefas individualmente.
- **Busca e Filtro**: Pesquise tarefas por texto e filtre por status (todas, concluídas, não concluídas).
- **Ordenação**: Ordene tarefas alfabeticamente (ascendente ou descendente).
- **Persistência**: Tarefas são salvas em um arquivo JSON no backend.

## Tecnologias Utilizadas

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js com Express
- **Persistência**: Arquivo JSON (`tarefas.json`)
- **Outros**: Fetch API para comunicação frontend-backend, CORS para permitir requisições

## Pré-requisitos

- Node.js (v14+)
- npm
- Navegador moderno (ex.: Chrome, Firefox)

## ⚙️ Configuração do Projeto

Para rodar o projeto completo (backend + frontend), siga os passos abaixo:

```bash
# Acesse o diretório do backend
cd Lista-de-Tarefas-Back

# Instale as dependências do backend
npm install

# Inicie o servidor backend
npm start

# Acesse o diretório do frontend
cd ../Lista-de-Tarefas-Front

# Instale as dependências do frontend
npm install

# Inicie o servidor frontend
npm run dev


