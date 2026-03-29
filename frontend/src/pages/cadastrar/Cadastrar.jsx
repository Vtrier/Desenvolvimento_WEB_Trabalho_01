import React, { useState } from 'react';
import { handlePostLivro } from './handleCadastrar';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Cadastrar() {
    const [titulo, setTitulo] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        await handlePostLivro({ titulo });
        alert("Livro salvo!");
        navigate('/listar');
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Novo Livro</h2>
            <form onSubmit={onSubmit}>
                <label>Título do Livro:</label>
                <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
                <button type="submit">Salvar Registro</button>
            </form>
        </div>
    );
}