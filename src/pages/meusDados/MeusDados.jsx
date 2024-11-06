import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuDados, MenuRetravel } from '../../componetes';
import style from './MeusDados.module.css';



export const MeusDados = () => {

    const [isMenuRetravelOpen, setIsMenuRetravelOpen] = useState(false);

        // Função para abrir o MenuRetravel e fechar o MenuRetravelModalidade
        const handleBotaoTrapezioPadraoClick = () => {
            setIsMenuRetravelOpen(prev => !prev); // Alterna a visibilidade
        };

    return (
        <div className={style.Dados}>
            <BotaoTrapezioPadrao 
                toggleMenu={handleBotaoTrapezioPadraoClick} // Adiciona a lógica de clique
            />  
            {isMenuRetravelOpen && (
                <div>
                    <MenuRetravel />
                </div>
            )}
            <div className={style.MenuDosDados}>
                <MenuDados/>
            </div>
        </div>
    );
};