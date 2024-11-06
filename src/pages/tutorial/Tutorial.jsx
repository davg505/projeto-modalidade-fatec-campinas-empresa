import { useState } from 'react';
import { BotaoTrapezioPadrao, CaixaDosTutorial, MenuRetravel } from '../../componetes';
import style from './Tutorial.module.css';

export const Tutorial = () => {

    const [isMenuRetravelOpen, setIsMenuRetravelOpen] = useState(false);

      // Função para abrir o MenuRetravel e fechar o MenuRetravelModalidade
    const handleBotaoTrapezioPadraoClick = () => {
        setIsMenuRetravelOpen(prev => !prev); // Alterna a visibilidade
    };

    return (
        <div className={style.Tutorial}>
            <BotaoTrapezioPadrao
                toggleMenu={handleBotaoTrapezioPadraoClick} // Adiciona a lógica de clique
            />  
                {isMenuRetravelOpen && (
                <div>
                    <MenuRetravel />
                </div>
            )}

            <div className={style.conteudo}> 
                <h1 className={style.Title2}>Tutorial</h1>
                <CaixaDosTutorial />
            </div>
        </div>
    );
};