import React, { useEffect, useState } from 'react';
import { handleGetMoedas } from './handleHome';
import './styles.css';

export default function Home() {
    const [moedas, setMoedas] = useState(null);

    useEffect(() => {
        handleGetMoedas().then(data => setMoedas(data));
    }, []);

    return (
        <div className="home-container">
            <h1>Painel de Controle</h1>
            <p>Bem-vindo ao sistema de gerenciamento de livros.</p>
            {moedas && (
                <div className="moedas-card">
                    <h3>Cotações Externas (AwesomeAPI):</h3>
                    <p>🇺🇸 Dólar: R$ {parseFloat(moedas.USDBRL.bid).toFixed(2)}</p>
                    <p>🇪🇺 Euro: R$ {parseFloat(moedas.EURBRL.bid).toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}