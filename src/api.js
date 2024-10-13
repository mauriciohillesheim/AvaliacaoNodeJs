const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());

app.use('/api/calculator', calculatorRoutes);

app.get('/', (req, res) => {
    res.send('Bem-vindo à API da Calculadora!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
