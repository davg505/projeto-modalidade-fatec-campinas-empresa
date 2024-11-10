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
                <h1>Área Empresa</h1>
                <span>Bem vindo ! empresa@fatec.br</span>
                <p> Para acessar as funcionalidades da aplicação clicar no botão menu</p>
                <h2 className={style.titulo}>Tutorial Área Empresa</h2>
                <h4>
                    <a className={style.video} href="https://www.youtube.com/watch?v=A9hcJgtnm6Q&list=RDA9hcJgtnm6Q&start_radio=1" target="_blank" rel="noopener noreferrer">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                    </a>
                </h4>
            </div>
        </div>

    );
};