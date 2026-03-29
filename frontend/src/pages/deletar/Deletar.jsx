import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { handleGetLivroParaDeletar, handleDeleteConfirm } from './handleDeletar';
import './styles.css';

export default function Deletar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [livro, setLivro] = useState(null);

    useEffect(() => {
        handleGetLivroParaDeletar(id).then(data => setLivro(data));
    }, [id]);

    const onDelete = async () => {
        await handleDeleteConfirm(id);
        alert("Livro removido com sucesso!");
        navigate('/listar');
    };

    if (!livro) return <p>Carregando...</p>;

    return (
        <div className="delete-container">
            <div className="delete-card">
                <h2>Confirmar Exclusão</h2>
                <p>Você tem certeza que deseja remover o livro:</p>
                <div className="livro-info">
                    <strong>{livro.titulo}</strong>
                </div>
                <div className="actions">
                    <button className="btn-confirm" onClick={onDelete}>Sim, Excluir</button>
                    <Link to="/listar" className="btn-cancel">Cancelar</Link>
                </div>
            </div>
        </div>
    );
}