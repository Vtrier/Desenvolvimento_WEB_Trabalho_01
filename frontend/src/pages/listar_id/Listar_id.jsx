import React, { useState } from 'react';
import { handleGetLivroById } from './handleListar_id.js';
import './styles.css';

export default function Consultar() {
    const [idBusca, setIdBusca] = useState('');
    const [livro, setLivro] = useState(null);
    const [erro, setErro] = useState('');

    const realizarBusca = async (e) => {
        e.preventDefault();
        setErro('');
        setLivro(null);
        
        try {
            const data = await handleGetLivroById(idBusca);
            if (data) {
                setLivro(data);
            } else {
                setErro('Livro não encontrado.');
            }
        } catch (err) {
            setErro('ID inválido.');
        }
    };

    return (
        <div className="consultar-container">
            <h2>Consultar Livro por ID</h2>
            <form onSubmit={realizarBusca} className="busca-form">
                <input 
                    type="text" 
                    placeholder="Digite o ID do livro..." 
                    value={idBusca} 
                    onChange={(e) => setIdBusca(e.target.value)} 
                />
                <button type="submit">Buscar</button>
            </form>

            {erro && <p className="error-msg">{erro}</p>}

            {livro && (
                <div className="resultado-card">
                    <h3>Dados do Registro:</h3>
                    <p><strong>ID:</strong> {livro.id}</p>
                    <p><strong>Título:</strong> {livro.titulo}</p>
                </div>
            )}
        </div>
    );
}