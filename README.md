# 💰 FinanceControl Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript)
![Axios](https://img.shields.io/badge/Axios-API-5A29E4?style=for-the-badge)
![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?style=for-the-badge&logo=chartdotjs)

Frontend do sistema **FinanceControl**, desenvolvido em **React + Vite**, responsável pela interface de gerenciamento financeiro, consumo da API ASP.NET Core e apresentação dos dashboards analíticos.

---

# ✨ Funcionalidades

- Login e cadastro de usuários
- Recuperação de senha
- Dashboard financeiro
- Cadastro de receitas
- Cadastro de despesas
- Cadastro de metas financeiras
- Filtros por período
- Gráficos interativos
- Tema claro e escuro
- Paginação
- Pesquisa
- Confirmação de exclusão
- Mensagens de sucesso e erro

---

# 🛠 Tecnologias Utilizadas

## Frontend

- React 19
- Vite
- JavaScript (ES6+)
- React Router DOM
- Axios
- Chart.js
- React Icons

## Organização

- Hooks Customizados
- Context API
- Componentização
- Layouts reutilizáveis
- Serviços para comunicação com API

## Ferramentas

- VS Code
- Git
- GitHub

---

# 📂 Estrutura do Projeto

```text
finance-frontend
│
├── src
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── styles
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
│
├── public
├── package.json
└── vite.config.js
```

---

# ⚙️ Como Executar

## Pré-requisitos

- Node.js 20+
- npm

---

## Clonar o repositório

```bash
git clone https://github.com/igordesouzaramos14/finance-frontend.git
```

Entre na pasta:

```bash
cd finance-frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

Aplicação:

```text
http://localhost:5173
```
---

# 🔗 Comunicação com a API

O frontend consome a API FinanceControl utilizando Axios.

Configuração padrão:

```javascript
const api = axios.create({
  baseURL: "http://127.0.0.1:8080/api"
});
```

As requisições autenticadas utilizam automaticamente o token JWT armazenado no navegador.

---

# 🚀 Funcionalidades Implementadas

- [x] Autenticação
- [x] Dashboard
- [x] CRUD de Receitas
- [x] CRUD de Despesas
- [x] CRUD de Metas
- [x] Hooks personalizados
- [x] Context API
- [x] Paginação
- [x] Pesquisa
- [x] Dashboard Analítico
- [x] Chart.js
- [x] Tema escuro
- [x] Componentização
- [x] Layout responsivo

---

# 🔄 Próximas Melhorias

- [ ] Upload de comprovantes
- [ ] Exportação para PDF
- [ ] Exportação para Excel
- [ ] Dashboard anual
- [ ] Melhorias na responsividade
- [ ] Internacionalização (i18n)
- [ ] Testes automatizados

# 📸 Preview

## 🔐 Login

![Login](assets/login.png)

---

## 👤 Cadastro

![Cadastro](assets/cadastro.png)

---

## 📊 Dashboard

![Dashboard](assets/dashboard.png)

---

## 💰 Nova Receita

![Nova Receita](assets/nova-receita.png)

---

## 🛒 Nova Despesa

![Nova Despesa](assets/nova-despesa.png)

---

## 🎯 Nova Meta

![Nova Meta](assets/nova-meta.png)

---

## 📈 Relatórios

![Relatórios](assets/relatorios.png)

---

## 🌙 Tema Escuro

![Tema Escuro](assets/tema-escuro.png)

# 👨‍💻 Autor

Desenvolvido por **Igor Ramos**.

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.

---

# 📄 Licença

Projeto desenvolvido para fins de estudo, prática e demonstração de habilidades em desenvolvimento Frontend utilizando React.