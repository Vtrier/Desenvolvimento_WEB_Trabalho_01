import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Home from './pages/principal/Home';
import Listar from './pages/listar/Listar';
import Listar_id from './pages/listar_id/Listar_id';
import Cadastrar from './pages/cadastrar/Cadastrar';
import Editar from './pages/editar/Editar';
import Deletar from './pages/deletar/Deletar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <main style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listar" element={<Listar />} />
          <Route path="/listar_id" element={<Listar_id />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/deletar/:id" element={<Deletar />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;