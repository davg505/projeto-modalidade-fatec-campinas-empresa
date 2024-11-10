import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuRetravel } from '../../componetes';
import { MenuAcessoIC } from '../../componetes/menuAcessoIC/MenuAcessoIC';
import style from './ICientifica.module.css';

export const ICientifica = () => {

    const [isMenuRetravelOpen, setIsMenuRetravelOpen] = useState(false);

        const handleBotaoTrapezioPadraoClick = () => {
            setIsMenuRetravelOpen(prev => !prev);
        };

    return (
        <div className={style.Estagio}>
            <BotaoTrapezioPadrao
                toggleMenu={handleBotaoTrapezioPadraoClick}
            />
            {isMenuRetravelOpen && (
                <div>
                    <MenuRetravel />
                </div>
            )}
            <div className={style.Title}>
                <h1>Área I.Cientifica - GTI</h1>
            </div>
            <div >
                <MenuAcessoIC/>
            </div>
        </div>
    );
};