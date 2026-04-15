# 🚚 LogiTech - Sistema de Gestão de Estoque

## 📌 Sobre o Projeto

O **LogiTech** é um sistema web de gerenciamento de estoque desenvolvido para simular a operação de uma startup de logística.
A aplicação permite controlar produtos, acompanhar o inventário em tempo real e aplicar regras de negócio que evitam erros operacionais.

O projeto utiliza o **Supabase** como backend (banco de dados + API REST automática) e **JavaScript com Fetch API** para comunicação assíncrona.



## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3 (Design moderno estilo dashboard)
* JavaScript (ES6+)
* Fetch API (requisições assíncronas)
* Supabase (PostgreSQL + API REST)


## 🗄️ Estrutura do Banco de Dados

Tabela: `produtos`

| Campo      | Tipo          | Regra       |
| ---------- | ------------- | ----------- |
| id         | serial        | Primary Key |
| nome       | varchar(100)  | Not Null    |
| categoria  | varchar(100)  | Not Null    |
| quantidade | integer       | >= 0        |
| preco      | numeric(10,2) | > 0         |


## 🔗 Integração com API (Supabase)

A API REST do Supabase foi utilizada através do endpoint:

```
/rest/v1/produtos
```

### Operações realizadas:

* **GET** `/produtos?select=*` → Listar produtos
* **POST** `/produtos` → Criar novo produto
* **PATCH** `/produtos?id=eq.X` → Atualizar quantidade
* **DELETE** `/produtos?id=eq.X` → Remover produto

### Headers utilizados:

```json
{
  "apikey": "SUA_CHAVE",
  "Authorization": "Bearer SUA_CHAVE",
  "Content-Type": "application/json",
  "Prefer": "return=representation"
}
```


## ⚙️ Funcionalidades

* 📦 Cadastro de produtos
* 📊 Listagem completa do estoque
* 🔄 Atualização de quantidade (simulação de venda)
* 🗑️ Remoção de produtos
* ⚠️ Alerta de estoque baixo (quantidade < 5)
* 💰 Cálculo do patrimônio total
* 🔍 Busca por categoria (ordenado por preço)


## 🧠 Regras de Negócio

* ❌ Não permite cadastrar produtos com preço menor ou igual a zero
* ❌ Não permite estoque negativo
* ⚠️ Identifica automaticamente produtos com baixo estoque
* 💰 Calcula o valor total do estoque (quantidade × preço)


## 🧪 Como Testar (Simulação de Venda)

### Passo 1:

Listar todos os produtos e localizar o item **"Mouse"**

### Passo 2:

Anotar:

* ID do produto
* Quantidade atual

### Passo 3:

Realizar a venda (subtrair 1 unidade):

```
PATCH /produtos?id=eq.ID
```

```json
{
  "quantidade": quantidade - 1
}
```


## ▶️ Como Executar o Projeto

1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` no navegador
3. Certifique-se de que as credenciais do Supabase estão corretas
4. Utilize a interface para gerenciar o estoque


## 🚀 Melhorias Futuras

* 🔐 Sistema de autenticação (login/logout)
* 🌙 Modo escuro/claro
* 📈 Dashboard com gráficos
* 📦 Filtro avançado por categorias
* 📊 Relatórios automatizados


## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.