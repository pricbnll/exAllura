require('dotenv').config({ path: './config/.env' });
 // Carrega variáveis do .env

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

console.log(process.env.PORT); // Deve mostrar 3001
console.log(process.env.DB_USER); // Deve mostrar root

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
