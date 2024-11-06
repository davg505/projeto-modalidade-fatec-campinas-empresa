import style from './Conteudo.module.css';
const Conteudo = (pros) => {
    const { children} = pros;
    return(
        <div className= {style.Conteudo}>
        {children}
        </div>
    );

};

export { Conteudo };
