import { UseAppContext } from "../../hooks";
import { Icone } from "../icone";
import style from './MenuRetravel.module.css';
import { TitulosIcones } from "./titulosIcones";

// eslint-disable-next-line react/prop-types
export const MenuRetravel = () => {
    const { iconesAluno } = UseAppContext();

    const iconesMinhaArea = iconesAluno.filter(item => item.id === 4 || item.id === 5);
    const iconesModalidades = iconesAluno.filter(item => item.id === 1 || item.id === 2 || item.id === 3);
    const iconesTutoria = iconesAluno.filter(item => item.id === 6);

    return (
        <div className={style.Menu}>
                <div>
                    <h2>Olá, Aluno. Bem-vindo!</h2>
                    <div>
                        <TitulosIcones nomeTitulo={'Minha área'} />
                        <div className={style['menu-icones']}>
                            {iconesMinhaArea.map(item => (
                                <Icone
                                    key={item.id}
                                    id={item.id}
                                    sigla={item.sigla}
                                    nome={item.nome}
                                    link={item.link}
                                />
                            ))}
                        </div>
                        <TitulosIcones nomeTitulo={'Modalidades'} />
                        <div className={style['menu-icones']}>
                            {iconesModalidades.map(item => (
                                <Icone
                                    key={item.id}
                                    id={item.id}
                                    sigla={item.sigla}
                                    nome={item.nome}
                                    link={item.link}
                                />
                            ))}
                        </div>
                        <TitulosIcones nomeTitulo={'Tutorial'} />
                        <div className={style['menu-icones']}>
                            {iconesTutoria.map(item => (
                                <Icone
                                    key={item.id}
                                    id={item.id}
                                    sigla={item.sigla}
                                    nome={item.nome}
                                    link={item.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
};
