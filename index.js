const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para interpretar JSON no body das requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API Service Provider is running!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
