import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuRetravel } from '../../componetes';
import { MenuAcesso } from '../../componetes/menuAcesso/MenuAcesso';
import style from './Estagio.module.css';

export const Estagio = () => {

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
                <h1>Área Estagio - GTI</h1>
            </div>
            <div >
                <MenuAcesso />
            </div>
        </div>
    );
};