const router = require('./src/routes/calculadora');
const express = require('express');

const app = express();
app.use(express.json());
app.use(router);

const port = 3000;
app.listen(3000, () => {
    console.log(`O servidor está rodando na porta ${port}.`);
})