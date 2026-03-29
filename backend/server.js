const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const livrosRoutes = require('./routes/livros.routes');

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

app.use('/livros', livrosRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em htttp://localhost:${PORT}`));