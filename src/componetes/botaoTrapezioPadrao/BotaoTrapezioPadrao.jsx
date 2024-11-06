import style from './BotaoTrapezioPadrao.module.css';

// eslint-disable-next-line react/prop-types
export const BotaoTrapezioPadrao = ({ toggleMenu }) => {

    return (
        <div className={style.MenuRetravel}>
            <button 
                onClick={toggleMenu} 
                className={style.Trapezioinvertido}
            >
                Menu
            </button>
            </div>
    );
};