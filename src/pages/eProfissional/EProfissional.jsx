import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuRetravel } from '../../componetes';
import { MenuAcessoEP } from '../../componetes/menuAcessoEP/MenuAcessoEP';
import style from './EProfissional.module.css';

export const EProfissional = () => {

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
                <h1>Área E.Profissional - GTI</h1>
            </div>
            <div >
                <MenuAcessoEP />
            </div>
        </div>
    );
};