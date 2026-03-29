# Trabalho 01: CRUD Fullstack Livraria SENAI

Este projeto consiste em uma aplicação Full Stack para o gerenciamento de um acervo de livros, desenvolvida para a disciplina de Desenvolvimento Web.

---

## 1. Contexto Escolhido
O contexto selecionado para este CRUD é o **Cadastro de Livros**. A aplicação permite que bibliotecas ou colecionadores gerenciem seus títulos, autores e anos de publicação de forma persistente.

---

## 2. Arquitetura Adotada
Seguindo as regras de separação de responsabilidades, o projeto foi estruturado da seguinte forma:

### Backend (Node.js + Express)
* **server.js:** Configuração do servidor, middlewares (`express.json`, `cors`) e chamada das rotas.
* **routes/livros.routes.js:** Definição dos endpoints da API.
* **utils/fileHandler.js:** Módulo responsável pela persistência, utilizando `fs.readFileSync` e `fs.writeFileSync`.
* **data/livros.json:** Arquivo JSON que atua como base de dados local.

### Frontend (React)
* **components/:** Elementos reutilizáveis como Header, Nav e Footer.
* **pages/:** Telas separadas por funcionalidade (Listar, Cadastrar, Atualizar e Deletar).
* **Serviços (Axios):** Funções de chamada HTTP isoladas da lógica visual dos componentes.
* **Navegação:** Implementada com **React Router DOM**.

---

## 3. Principais Decisões Técnicas
* **Consumo de API com Axios:** Utilizado para integrar o frontend ao backend de forma assíncrona.
* **Persistência Síncrona (FileSync):** Uso de `fs.readFileSync` e `fs.writeFileSync` para garantir a integridade dos dados no arquivo JSON durante as operações de CRUD.
* **Gerenciamento de Estado:** Uso de `useState` para dados locais e `useEffect` para sincronização com a API.
* **Layout Clean:** CSS puro focado em usabilidade, organização e leitura clara.

---

## 4. Como Instalar e Executar

### 1. Instalar Dependências
# No diretório raiz (Frontend)
npm install

# No diretório backend
cd backend
npm install

### 2. Executar o Projeto
Abra dois terminais:

* **Terminal 1 (Backend):**
  cd backend
  npm start

* **Terminal 2 (Frontend):**
  npm start

### Portas Utilizadas
* **Frontend:** http://localhost:3001
* **Backend:** http://localhost:3000

---

## 5. Rotas do Frontend (React Router DOM)

| Página | Rota | Finalidade |
| :--- | :--- | :--- |
| Home | `/` | Página Inicial consumindo API de cotações da AwesomeAPI. |
| Listar | `listar` | Listagem geral de todos os livros cadastrados. |
| Listar por ID| `listar:id` | Listagem de um livro específico. |
| Cadastrar | `/cadastrar` | Formulário para inclusão de novos registros. |
| Editar | `/editar/:id` | Tela para edição de dados de um livro específico. |
| Deletar | `/deletar/:id` | Interface para confirmação e exclusão de registro. |

---

## 6. Rotas da API Backend

| Método | Caminho | Objetivo |
| :--- | :--- | :--- |
| GET | `/listar_livros` | Retorna todos os registros do JSON. |
| GET | `/listar_livros/:id` | Busca um livro específico pelo ID. |
| POST | `/cadastrar_livros` | Salva um novo livro no banco JSON. |
| PUT | `/atualizar_livros/:id` | Atualiza os dados de um livro existente. |
| DELETE | `/deletar_livros/:id` | Remove um livro do arquivo JSON. |

---

## 7. Gerenciamento de Estado no Frontend

O fluxo de dados na aplicação segue estes princípios:

* **useState:** Armazena a lista de livros obtida da API e os dados temporários de formulários. A interface é re-renderizada automaticamente sempre que o estado é atualizado.
* **useEffect:** Dispara a chamada ao backend via Axios assim que o componente de listagem é montado, garantindo que o usuário veja os dados atualizados.
* **Fluxo de Dados:**
  1. O usuário interage com a tela (ex: clica em deletar).
  2. Uma função externa (Axios) envia a requisição ao servidor.
  3. O backend processa a alteração no arquivo JSON via `fileHandler`.
  4. O frontend recebe a confirmação, atualiza o estado local e a tela reflete a mudança instantaneamente.

---
Desenvolvido por **João B., João G. e Vítor H.** - ADS Trabalho 01
