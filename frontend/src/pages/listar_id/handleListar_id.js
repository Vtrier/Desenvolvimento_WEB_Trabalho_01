import axios from 'axios';

export const handleGetLivroById = async (id) => {
    const res = await axios.get(`http://localhost:3000/livros/listar_livros/${id}`);
    return res.data;
};