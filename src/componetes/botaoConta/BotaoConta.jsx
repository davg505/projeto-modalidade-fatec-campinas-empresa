import { useState } from "react";
import style from './BotaoConta.module.css';

export const BotaoConta = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
    setShowMenu(!showMenu);
    };
    return(
        <div className={style.BotaoConta}>
        <button onClick={toggleMenu} className={style.Icone}>
          {/* Ícone de Conta (pode ser um SVG ou qualquer conteúdo) */}
        ☰
        </button>
        {showMenu && (
        <div className={style.Menu}>
            <ul >
            <li>Conta</li>
            <li>Sair</li>
            </ul>
        </div>
        )}
    </div>

    );

};