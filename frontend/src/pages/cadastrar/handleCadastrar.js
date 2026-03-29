import axios from 'axios';

export const handlePostLivro = async (dados) => {
    return await axios.post('http://localhost:3000/livros/cadastrar_livros', dados);
};