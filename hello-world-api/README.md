# Hello World API

Esta é uma API simples construída com Node.js e Express que retorna a mensagem **"Hello World"**.  
Este projeto serve como um exemplo básico de como criar uma API RESTful utilizando Node.js.

## 🚀 Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## 📁 Estrutura do Projeto

```
hello-world-api/
├── app.js. 
├── config/
│   └── .env
├── Dockerfile
├── .dockerignore
└── package.json
```

## ⚙️ Instalação

1. Clone este repositório ou faça o download do código.
2. Navegue até o diretório do projeto:

```bash
cd hello-world-api
```

3. Instale as dependências:

```bash
npm install
```

## 🌱 Configuração de Variáveis de Ambiente

Crie um diretório para configuração:

```bash
mkdir config
```

Crie o arquivo `.env` dentro do diretório `config`:

```bash
touch config/.env
```

Adicione as variáveis de ambiente ao arquivo `.env`:

```ini
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
```

## 💻 Executando a API

Para executar a API localmente, use:

```bash
node app.js
```

A API estará disponível em: [http://localhost:3001](http://localhost:3001).

## 🧪 Testando a API

Abra seu navegador ou uma ferramenta como Postman e acesse:

```
http://localhost:3001
```

Você deve ver a mensagem:

```
Hello World
```

## 🐳 Docker

Este projeto também inclui um `Dockerfile` para que você possa executar a API em um contêiner Docker.

### 🔨 Construindo a Imagem Docker

```bash
docker build -t hello-world-api .
```

### 🚢 Executando o Contêiner Docker

```bash
docker run -p 30001:3001 hello-world-api
```

A API estará disponível em: [http://localhost:3001](http://localhost:3001) dentro do contêiner.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com este projeto.  
Você pode abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto é de domínio público.  
Sinta-se à vontade para usar e modificar conforme necessário.



