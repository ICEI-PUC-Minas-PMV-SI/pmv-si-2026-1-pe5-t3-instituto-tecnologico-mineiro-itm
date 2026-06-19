# Etapa 4 — Backend — Gerenciamento de Infraestrutura de Rede

## Introdução

A Etapa 4 consiste no desenvolvimento de uma API REST para gerenciamento da infraestrutura de TI do **Instituto Tecnológico Mineiro (ITM)**. A aplicação foi construída em **Node.js com Express** e banco de dados **MySQL**, permitindo o gerenciamento completo dos equipamentos, endereçamento IP e links de dados das três unidades do ITM.

## Funcionalidades Implementadas

- **Listar** todos os registros de cada entidade, com filtro por unidade
- **Cadastrar** novos registros (equipamentos, endereços IP e links de dados)
- **Editar** registros existentes
- **Remover** registros com retorno de confirmação

## Unidades Contempladas

A API contempla as três unidades do ITM: **Sede**, **Campus Norte** e **Campus Sul**.

## Tecnologias Utilizadas

| Componente | Tecnologia |
|---|---|
| Back-end | Node.js 20 + Express 5 |
| Banco de Dados | MySQL 9.0 |
| Conector | mysql2 |
| Documentação | Swagger UI (OAS 3.0) |
| Servidor | AWS EC2 Ubuntu 22.04 (t3.micro) |
| Gerenciador de processos | PM2 |

## Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Conexão com o MySQL
│   ├── controllers/
│   │   ├── equipamentoController.js   # Lógica CRUD de equipamentos
│   │   ├── enderecoIpController.js    # Lógica CRUD de endereços IP
│   │   └── linkController.js          # Lógica CRUD de links de dados
│   ├── routes/
│   │   ├── equipamentosRoute.js       # Rotas de equipamentos
│   │   ├── enderecosIpRoute.js        # Rotas de endereços IP
│   │   └── linksRoute.js              # Rotas de links de dados
│   ├── app.js                   # Configuração do Express e middlewares
│   └── server.js                # Ponto de entrada da aplicação
├── swagger.yaml                 # Documentação da API (OpenAPI 3.0)
├── .env.example                 # Modelo de variáveis de ambiente
└── package.json                 # Dependências do projeto
```

## Implantação

A aplicação foi implantada em uma instância **AWS EC2** (`t3.micro`, Ubuntu 22.04), acessível via navegador na porta `3000`. O banco de dados `itm_db` roda no mesmo servidor com **MySQL 9.0**, gerenciado pelo **PM2** para garantir disponibilidade contínua.

**Acesse a documentação interativa da API:**
`http://18.219.81.118:3000/api/docs`
