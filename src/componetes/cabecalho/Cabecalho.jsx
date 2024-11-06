import { BotaoConta } from "../botaoConta";
import style from "./Cabecalho.module.css";
import logo from './image/logoSite2.png';

const Cabecalho = () => {
    return (
        <div className={style.Cabecalho}>
            <div className={style.LeftSection}>
                <h1><span>Modalidades</span></h1>
                <h5><span>Estagio / IC / EP</span></h5>
            </div>
            <img src={logo} alt="Minha Imagem" />
            <BotaoConta/>
        </div>
    );
};

export { Cabecalho };
