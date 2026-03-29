import axios from 'axios';

const URL = 'http://localhost:3000/livros';

export const handleGetLivroById = async (id) => {
    const res = await axios.get(`${URL}/listar_livros/${id}`);
    return res.data;
};

export const handlePutLivro = async (id, dados) => {
    return await axios.put(`${URL}/atualizar_livros/${id}`, dados);
};