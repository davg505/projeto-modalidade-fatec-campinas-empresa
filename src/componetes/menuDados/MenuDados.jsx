import { useEffect, useState } from "react";
import { UseAppContext } from "../../hooks";
import style from './MenuDados.module.css';

export const MenuDados = () => { 

    const [showMenu, setShowMenu] = useState(false);
    const [listaMeusDados, setListaMeusDados] = useState([]);  // Estado para armazenar listaMeusDados
    const [selectedId, setSelectedId] = useState(null);  // Estado para armazenar o id selecionado
    const {
        tabelaEmpresa, 
        carregarTabelaEmpresa,  
        dadoResponsavel,
        carregarDadosResponsvel,
    
    } = UseAppContext();
    const [dadoMobilidade, setDadoMobilidade] = useState([]);

    // Função para carregar listaMeusDados
    const carregarListaMeusDados = async () => {
        try {
            setListaMeusDados([
                { id: 1, nomeColuna: 'Dados do Responsavel' },
                { id: 2, nomeColuna: 'Dados da Empresa' },
                { id: 3, nomeColuna: 'Modalidade' }
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };


      // Função para carregar listaMeusDados
      const carregarDadoMobilidade = async () => {
        try {
            setDadoMobilidade([
                { id: 1, nomeColuna: 'Modilidade', dadoColuna: 'Estagio' },
                { id: 2, nomeColuna: 'Modilidade', dadoColuna: 'Iniciacao Cientifica' },
                { id: 3, nomeColuna: 'Modilidade', dadoColuna: 'Equivalencia Profissional' },
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
        if (id === 2) {
            carregarTabelaEmpresa();
        }else if (id === 1) {
            carregarDadosResponsvel();
       }else if (id === 3) {
        carregarDadoMobilidade();
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
                        {/* Se o id selecionado for 2, exibe tabela empresa */}
                        {selectedId === 2 && tabelaEmpresa.map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeColuna}</strong>:</p>
                                <p>{item.dadoColuna}</p>
                            </div>
                        ))}

                        {/* Se o id selecionado for 1, exibe responsavel */}
                        { selectedId === 1 &&  dadoResponsavel.map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p><strong>{item.nomeColuna}</strong>:</p>
                                <p>{item.dadoColuna}</p>
                            </div>
                        )) }

                        { selectedId === 3 &&  dadoMobilidade.map(item => (
                            <div key={item.id} className={style.dadosItem}>
                                <p> Mobilidade ativo:</p>
                                <p><strong>{item.nomeColuna}</strong>:</p>
                                <p>{item.dadoColuna}</p>
                            </div>
                        )) }

                    </div>
                </div>
            )}
        </div>
    );
};
