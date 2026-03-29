import axios from 'axios';

const URL = 'http://localhost:3000/livros';

export const handleGetLivroParaDeletar = async (id) => {
    const res = await axios.get(`${URL}/listar_livros/${id}`);
    return res.data;
};

export const handleDeleteConfirm = async (id) => {
    return await axios.delete(`${URL}/deletar_livros/${id}`);
};