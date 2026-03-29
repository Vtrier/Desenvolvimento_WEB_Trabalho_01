import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { handleGetLivroById, handlePutLivro } from './handleEditar';
import './styles.css';

export default function Editar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [livro, setLivro] = useState({ titulo: '' });

    useEffect(() => {
        handleGetLivroById(id).then(data => setLivro(data));
    }, [id]);

    const onUpdate = async (e) => {
        e.preventDefault();
        await handlePutLivro(id, livro);
        navigate('/listar');
    };

    return (
        <div className="form-container">
            <h2>Editar Registro</h2>
            <form onSubmit={onUpdate}>
                <label>Título:</label>
                <input 
                    type="text" 
                    value={livro.titulo} 
                    onChange={e => setLivro({...livro, titulo: e.target.value})} 
                />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}