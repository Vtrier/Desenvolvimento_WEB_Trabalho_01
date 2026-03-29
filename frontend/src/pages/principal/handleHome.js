import axios from 'axios';

export const handleGetMoedas = async () => {
    const res = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
    return res.data;
};