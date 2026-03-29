import React, { useEffect, useState } from 'react';
import { handleGetLivros, handleDeleteLivro } from './handleListar';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Listar() {
    const [livros, setLivros] = useState([]);

    const carregar = async () => {
        const data = await handleGetLivros();
        setLivros(data);
    };

    useEffect(() => { carregar(); }, []);

    return (
        <div className="listar-container">
            <h2>Livros Cadastrados</h2>
            <table className="tabela-livros">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(l => (
                        <tr key={l.id}>
                            <td>{l.titulo}</td>
                            <td>
                                <Link to={`/editar/${l.id}`} className='btn-acao btn-editar'>Editar</Link>
                                <Link to={`/deletar/${l.id}`} className='btn-acao btn-excluir'>Excluir</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}