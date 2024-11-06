import { useEffect, useState } from "react";
import { UseAppContext } from "../../hooks";
import style from './MenuDados.module.css';

export const MenuDados = () => { 

    const [showMenu, setShowMenu] = useState(false);
    const [listaMeusDados, setListaMeusDados] = useState([]);  // Estado para armazenar listaMeusDados
    const [selectedId, setSelectedId] = useState(null);  // Estado para armazenar o id selecionado
    const { tabelaAluno, carregarTabelaAluno, tabelaEstagio, carregarDadosEstagio } = UseAppContext();

    // Função para carregar listaMeusDados
    const carregarListaMeusDados = async () => {
        try {
            setListaMeusDados([
                { id: 1, nomeColuna: 'Meus Dados' },
                { id: 2, nomeColuna: 'Dados do Estágio' },
                { id: 3, nomeColuna: 'Dados da Empresa' }
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };

    useEffect(() => {
        carregarListaMeusDados();  // Carrega a lista de Meus Dados
    }, []);

    // Função para alternar o menu e carregar os dados correspondentes
    const handleClick = (id) => {
        setShowMenu(true);
        setSelectedId(id);  // Define o id do botão selecionado
        if (id === 1) {
            carregarTabelaAluno();  // Carrega os dados do aluno
        } else if (id === 2) {
            carregarDadosEstagio();  // Carrega os dados do estágio
        }
    };

    // Exibe uma mensagem enquanto os dados estão sendo carregados
   // if (!tabelaAluno || tabelaAluno.length === 0)  {
   //     return <div>Carregando dados...</div>;
   // }

    return (
        <div>
            {/* Gera um botão para cada item de listaMeusDados */}
            {listaMeusDados.map(item => (
                <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}  // Chama handleClick com o id correto
                    className={style.botaoDados}
                >
                    {item.nomeColuna}
                </button>
            ))}

            {/* O menu de edição aparece se showMenu for true */}
            {showMenu && (
                <div className={style.Menu}>
                    <button className={style.botaoDadosEditar}> Editar </button>
                    <div>
                        {/* Se o id selecionado for 1, exibe tabelaAluno */}
                        {selectedId === 1 && tabelaAluno.map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeColuna}</strong>:</p>
                                <p>{item.dadoColuna}</p>
                            </div>
                        ))}

                        {/* Se o id selecionado for 2, exibe tabelaEstagio */}
                        {selectedId === 2 && tabelaEstagio.map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeColuna}</strong>:</p>
                                <p>{item.dadoColuna}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
