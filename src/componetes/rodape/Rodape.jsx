import style from './Rodape.module.css';

export const Rodape = () => {

    const atualAno = (new Date()).getFullYear();
    return (
        <div className= {style.Rodape}>
        <h1>
        <span>© {atualAno} - Desenvolvido por Gtech </span>
        </h1>
        </div>
    );

};