const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHandler');

router.get('/listar_livros', (req, res) => {
  res.json(readData());
});

router.get('/listar_livros/:id', (req, res) => {
  const livros = readData();
  const livro = livros.find(l => l.id === req.params.id);
  res.json(livro);
});

router.post('/cadastrar_livros', (req, res) => {
  const livros = readData();
  const novoLivro = { id: Date.now().toString(), ...req.body };
  livros.push(novoLivro);
  writeData(livros);
  res.status(201).json(novoLivro);
});

router.put('/atualizar_livros/:id', (req, res) => {
  const livros = readData();
  const index = livros.findIndex(l => l.id === req.params.id);
  if (index !== -1) {
    livros[index] = { ...livros[index], ...req.body };
    writeData(livros);
    return res.json({ message: "Atualizado!" });
  }
  res.status(404).send("Não encontrado");
});

router.delete('/deletar_livros/:id', (req, res) => {
  const livros = readData();
  const filtrados = livros.filter(l => l.id !== req.params.id);
  writeData(filtrados);
  res.json({ message: "Excluído!" });
});

module.exports = router;