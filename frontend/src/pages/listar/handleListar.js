import axios from 'axios';

const API_URL = 'http://localhost:3000/livros';

export const handleGetLivros = async () => {
    const res = await axios.get(`${API_URL}/listar_livros`);
    return res.data;
};

export const handleDeleteLivro = async (id) => {
    await axios.delete(`${API_URL}/deletar_livros/${id}`);
};