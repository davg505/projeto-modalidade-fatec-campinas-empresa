import style from './CaixaDosTutorial.module.css';


export const CaixaDosTutorial = () => {
    return (
        <div className={style.Caixa}>
            <h2 className={style.titulo}>Tutorial Modalidade Estágio</h2>
            <h4>
                <a className={style.video} href="https://www.youtube.com/watch?v=A9hcJgtnm6Q&list=RDA9hcJgtnm6Q&start_radio=1" target="_blank" rel="noopener noreferrer">
                    Video 1
                </a>
            </h4>
            <h4>
                <a className={style.video} href="https://www.youtube.com/watch?v=5r3B7yz6J68&list=RDA9hcJgtnm6Q&index=2" target="_blank" rel="noopener noreferrer">
                    Video 2
                </a>
            </h4>

            <h2  className={style.titulo}>Tutorial Modalidade Iniciação Científica</h2>
            <h4>
                <a className={style.video} href="https://www.youtube.com/watch?v=Q0oIoR9mLwc&list=RDA9hcJgtnm6Q&index=3" target="_blank" rel="noopener noreferrer">
                    Video 1
                </a>
            </h4>
            <h4>
                <a className={style.video} href="https://www.youtube.com/watch?v=5GHXEGz3PJg&list=RDA9hcJgtnm6Q&index=4" target="_blank" rel="noopener noreferrer">
                    Video 2
                </a>
            </h4>

            <h2  className={style.titulo}>Tutorial Modalidade Equivalência Profissional</h2>
            <h4>
                <a className={style.video} href="https://www.youtube.com/watch?v=l81u-oSIAp4&list=RDA9hcJgtnm6Q&index=5" target="_blank" rel="noopener noreferrer">
                    Video 1
                </a>
            </h4>
            <h4>
                <a className={style.video} href="https://www.youtube.com/watch?v=G6Kspj3OO0s&list=RDA9hcJgtnm6Q&index=6" target="_blank" rel="noopener noreferrer">
                    Video 2
                </a>
            </h4>
        </div>
    );
};