import style from './TitulosIcones.module.css';

export const TitulosIcones = (props) => {
    const {nomeTitulo} = props
    return(
        <div className={style.TitulosIcones}>
            <h2>{nomeTitulo}</h2>
        </div>

    );

};