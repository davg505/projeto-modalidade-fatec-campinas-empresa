import { Link } from 'react-router-dom';
import style from './Icone.module.css';

export const Icone = ({ sigla, nome, link, onClick }) => {
    return (
        <div>
            {link && !onClick ? (
                <Link to={link} className={style.IconeLink}>
                    <button className={style.Icone}>
                        {sigla}
                    </button>
                </Link>
            ) : (
                <button className={style.Icone} onClick={onClick}>
                    {sigla}
                </button>
            )}
            <i className={style.IconeNome}>{nome}</i>
        </div>
    );
};
