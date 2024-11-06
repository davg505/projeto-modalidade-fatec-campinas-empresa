import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuRetravel } from '../../componetes';
import style from './Inicial.module.css';

export const Inicial = () => {

    const [isMenuRetravelOpen, setIsMenuRetravelOpen] = useState(false);


        // Função para abrir o MenuRetravel e fechar o MenuRetravelModalidade
        const handleBotaoTrapezioPadraoClick = () => {
            setIsMenuRetravelOpen(prev => !prev); // Alterna a visibilidade
        };

    return (
        <div className={style.Inicial}>
            <BotaoTrapezioPadrao 
                toggleMenu={handleBotaoTrapezioPadraoClick} // Adiciona a lógica de clique
            />  
            {isMenuRetravelOpen && (
                <div>
                    <MenuRetravel />
                </div>
            )}
            <div className={style.Title}>
                <h1>Área Aluno</h1>
            </div>
        </div>
    );
};