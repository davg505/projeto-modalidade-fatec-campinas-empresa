/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Api } from '../services/Api';

export const AppContext = createContext({});



export const AppContextProvider = (props) => {
    const { children } = props;

    const [tabelaEmpresa, setTabelaEmpesa] = useState([]);

    const [meusDados, setMeusDados] = useState([]);

    const [tabelaEstagio, setTabelaEstagio] = useState([]);

    const [dadoResponsavel, setDadoResponsavel] = useState([]);

    const [ListaMenuAcesso, setListaMenuAcesso] = useState([]);

    const [iconesAluno] = useState([
        { id: 1, sigla: 'E', nome:'Estagio', link: '/estagio', texto:'Estagio' },
        { id: 2, sigla: 'IC', nome:'I.Cientifica', link: '/ic' , texto:'Iniciação Cientifica' },
        { id: 3, sigla: 'EP', nome:'E.Profissional' , link: '/ep', texto:'Equivalencia Profissional'},
        { id: 4, sigla: 'MA', nome:'Avisos', link: '/avisos', texto:'Avisos' },
        { id: 5, sigla: 'MD', nome:'Dados',  link: '/dados', texto:'Meus dados' },
        { id: 6, sigla: 'T', nome:'Tutorial',  link: '/tutorial', texto:'Tutorial' },

        
    ]);
    
    const [iconesEstagio] = useState([
        { id: 1, sigla: 'SE', nome:'S.Estágio',  texto:'Solicitar Estágio' },
        { id: 3, sigla: 'CS', nome:'C.Solicitação' ,  texto:'Cancelar Solicitação'},
        { id: 4, sigla: 'PP', nome:'P.Período' ,  texto:'Prorrogação de período' },
        { id: 5, sigla: 'EO', nome:'N.O.Obrigatório' ,  texto:'Não Obrigatório para Obrigatório' },
        { id: 6, sigla: 'RT', nome:'R.Termo',  texto:'Rescisão do termo' },
        { id: 7, sigla: 'RE', nome:'R.Estágio' ,  texto:'Relatório de estágio' },
        { id: 8, sigla: 'FA', nome:'F.Avaliação',  texto:'Ficha de avaliação'  },
        { id: 9, sigla: 'FE', nome:'F.Estágio',  texto:'Finalização do Estágio' },
    
    ]);

    // Carega os botoes para area I Cientifica 
    const [iconesICientifica] = useState([
        { id: 1, sigla: 'SIC', nome:'S.I.Cientifica',  texto:'Solicitar I.Cientifica' },

    ]);


      // Carrega dados da empresa
    const carregarTabelaEmpresa = async () => {
        try {
            const { data } = await Api.get('/empresa'); // Buscando os dados da API
            const empresa = data[0]; // Assumindo que a API retorna um array com um único objeto
            setTabelaEmpesa([
                { id: 1, nomeColuna: 'Nome da empresa', dadoColuna: empresa.NomeEmpresa },
                { id: 2, nomeColuna: 'CNPJ', dadoColuna: empresa.CNPJ },
                { id: 3, nomeColuna: 'Endereco', dadoColuna: empresa.endereco },
                { id: 4, nomeColuna: 'Cidade', dadoColuna: empresa.local },
                { id: 5, nomeColuna: 'Estado', dadoColuna: empresa.estado },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados do empresa', error);
        }
    };

     // Carrega dados da empresa
    const carregarDadosResponsvel = async () => {
        try {
            const { data } = await Api.get('/empresaAluno'); // Buscando os dados da API
            const responsavel = data[0]; // Assumindo que a API retorna um array com um único objeto
            setDadoResponsavel([
                { id: 1, nomeColuna: 'Nome do representante', dadoColuna: responsavel.nomeRepresentante },
                { id: 2, nomeColuna: 'Cargo', dadoColuna: responsavel.cargoFunção },
                { id: 3, nomeColuna: 'CPF', dadoColuna: responsavel.cpfRepresentante },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dado responsavel', error);
        }
    };

            const [TabelaTotalAlunoEstagio, setTabelaTotalAlunoEstagio] = useState([]);
             // Função para carregar Tebela Total Aluno Estagio
            const carregarTebelaTotalAlunoEstagio = () => {
                const tabelaDados = Array.from({ length: 50 }, (_, index) => ({
                    nomeAluno: `Aluno ${index + 1}`,
                    email: `aluno${index + 1}@exemplo.com`,
                    ra: `RA${1000 + index}`,
                    curso: `Curso GTI`, // Exemplos variados de cursos
                    semestre: `${index % 10 + 1}º`,
                    dataInicial: `2024-01-0${(index % 9) + 1}`,
                    dataFinal: `2024-12-0${(index % 9) + 1}`,
                    ano: 2024,
                    modalidade: 'Estagio' ,
                    status: index % 3 === 0 ? 'Com solicitação' : 'Sem solicitação',
                    aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                    enviarDiretor: false // Exemplo de valor booleano
                }));
            
                setTabelaTotalAlunoEstagio(tabelaDados);
            };
    
    
            const [TebelaSemSolicitacaoEstagio, setTebelaSemSolicitacaoEstagio] = useState([]);
                // Função para carregar Tebela Total Aluno Estagio
            const carregarTebelaSemSolicitacaoEstagio = () => {
                const tabelaDados = Array.from({ length: 10 }, (_, index) => ({
                    nomeAluno: `Aluno ${index + 1}`,
                    email: `aluno${index + 1}@exemplo.com`,
                    ra: `RA${1000 + index}`,
                    curso: `Curso GTI`, // Exemplos variados de cursos
                    semestre: `${index % 10 + 1}º`,
                    dataInicial: `2024-01-0${(index % 9) + 1}`,
                    dataFinal: `2024-12-0${(index % 9) + 1}`,
                    ano: 2024,
                    modalidade: 'Estagio' ,
                    status: 'Sem solicitação',
                    aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                    enviarDiretor: false // Exemplo de valor booleano
                }));
            
                setTebelaSemSolicitacaoEstagio(tabelaDados);
            };
    
            const [TebelaComSolicitacaoEstagio, setTebelaComSolicitacaoEstagio] = useState([]);
                // Função para carregar Tebela Total Aluno Estagio
                const carregarTebelaComSolicitacaoEstagio = () => {
                    const tabelaDados = Array.from({ length: 23 }, (_, index) => ({
                        nomeAluno: `Aluno ${index + 1}`,
                        email: `aluno${index + 1}@exemplo.com`,
                        ra: `RA${1000 + index}`,
                        curso: `Curso GTI`, // Exemplos variados de cursos
                        semestre: `${index % 10 + 1}º`,
                        dataInicial: `2024-01-0${(index % 9) + 1}`,
                        dataFinal: `2024-12-0${(index % 9) + 1}`,
                        ano: 2024,
                        modalidade: 'Estagio' ,
                        status:  'Com solicitação',
                        aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                        enviarDiretor: false // Exemplo de valor booleano
                    }));
                
                    setTebelaComSolicitacaoEstagio(tabelaDados);
                };
    
    
                const [TebelaEstagioCancelado, setTebelaEstagioCancelado] = useState([]);
                    // Função para carregar Tebela Total Aluno Estagio
            const carregarTebelaEstagioCancelado = () => {
                const tabelaDados = Array.from({ length: 25 }, (_, index) => ({
                    nomeAluno: `Aluno ${index + 1}`,
                    email: `aluno${index + 1}@exemplo.com`,
                    ra: `RA${1000 + index}`,
                    curso: `Curso GTI`, // Exemplos variados de cursos
                    semestre: `${index % 10 + 1}º`,
                    dataInicial: `2024-01-0${(index % 9) + 1}`,
                    dataFinal: `2024-12-0${(index % 9) + 1}`,
                    ano: 2024,
                    modalidade: 'Estagio',
                    status: 'Cancedado',
                    aprovado: index % 2 === 0 ? 'Aprovado' : 'Reprovado',
                    enviarDiretor: false // Exemplo de valor booleano
                }));
            
                setTebelaEstagioCancelado(tabelaDados);
            };

     // Função para carregar lista geral de Dados
     const carregarListaMenuAcesso = async () => {
        try {
            setListaMenuAcesso([
                { id: 1, nomeColuna: 'Lista Total de Alunos Estagio' },
                { id: 2, nomeColuna: 'Lista sem Solicitação Estagio' },
                { id: 3, nomeColuna: 'Lista com Solicitação Estagio' },
                { id: 4, nomeColuna: 'Lista de Estagio Cancelado' },
                { id: 5, nomeColuna: 'Lista Total de Alunos Iniciação científica' },
                { id: 6, nomeColuna: 'Lista sem Solicitação Iniciação científica' },
                { id: 7, nomeColuna: 'Lista com Solicitação Iniciação científica' },
                { id: 8, nomeColuna: 'Lista de Iniciação científica Cancelado' },
                { id: 9, nomeColuna: 'Lista Total de Alunos Equivalência profissional' },
                { id: 10, nomeColuna: 'Lista sem Solicitação Equivalência profissional' },
                { id: 11, nomeColuna: 'Lista com Solicitação Equivalência profissional' },
                { id: 12, nomeColuna: 'Lista de Equivalência profissional Cancelado' },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };




















       // Entrada dos dados da empresa. 
        const adicionarDadosEmpresa = async (dadosEmpresaEstagio) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        try {
            const novaDadosEmpresa = {
                ...dadosEmpresaEstagio,
                alunoId:aluno.id,
                id: Date.now,
            };
            const response = await Api.post('/entradaEmpresaAluno', novaDadosEmpresa);
        
            console.log('Solicitação enviada com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    
       // Entrada dos dados da empresa. 
    const adicionarDadosEstagioAluno = async (dadosEstagioAluno) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        try {
            const novaDadosEmpresa = {
                ...dadosEstagioAluno,
                alunoId:aluno.id,
                id: Date.now,
            };
            const response = await Api.post('/entradaDadosEstagioAluno', novaDadosEmpresa);
        
            console.log('Solicitação enviada com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };



    // Enviar dados para TERMO DE COMPROMISSO PARA A REALIZAÇÃO DE ESTÁGIO SUPERVISIONADO NÃO OBRIGATÓRIO (REMUNERADO)
    const enviarDadosTermoNOR = async () => {
        try {
            const { data: empresaData } = await Api.get('/entradaEmpresaAluno');
            console.log('Dados da Empresa:', empresaData);
            if (!empresaData || empresaData.length === 0) {
                throw new Error('Nenhum dado empresa encontrado');
               ;
            }
            const dadosEmpresa = empresaData[0];

            const { data: estagioData } = await Api.get('/entradaDadosEstagioAluno');
            if (!estagioData || estagioData.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }

            const dadosEstagio = estagioData[0];

            const { data: alunoData } = await Api.get('/aluno'); 
            if (!alunoData || alunoData.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const aluno = alunoData[0];

            const { data: pessoalData } = await Api.get('/dadosPessoalAluno'); 
            if (!pessoalData || pessoalData.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const pessoal = pessoalData[0];

            const { data: dadosFatec } = await Api.get('/dadosFatec'); 
            if (!dadosFatec || dadosFatec.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const fatec = dadosFatec[0];

            const { data: dadosFatecCurso } = await Api.get('/dadosFatecCurso'); 
            if (!dadosFatecCurso || dadosFatecCurso.length === 0) {
                throw new Error('Nenhum aluno encontrado');
            }
            const curso = dadosFatecCurso[0];


            const dadosParaTermo = {
                ...dadosEmpresa,
                nomeEmpresa: dadosEmpresa.name,
                ...dadosEstagio,
                ...aluno,
                ...pessoal,
                rgAluno: pessoal.rg,
                enderecoAluno: pessoal.endereco,
                ...curso,
                cidadeFatec: fatec.cidade,
                enderecoFatec: fatec.endereco,
            
            };
        return dadosParaTermo;
        } catch (error) {
        console.error('Erro ao buscar dados do aluno:', error);
        return null;
        }
    };
    
    // Editar Solicitacao Estagio
    const editarSolicitacaoEstagio = async (solicitacao) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];

        try {
            const editadoSolicitacao = {
                ...solicitacao,
                alunoId:aluno.id,
            };

            const estagioAlteracao = {
                ...estagio,
                TipoDeEstagio: solicitacao.estagioTipo,
                modelo: solicitacao.estagioModelo,
            };

            const response = await Api.put('/entradaSolitacao', editadoSolicitacao);
            const response1 = await Api.put(`/estagio/${estagio.id}`,  estagioAlteracao);

            console.log('Solicitação enviada com sucesso:', response.data, response1 );
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    // Nova entrada de solicação
    const adicionarSolicitacaoEstagio = async (solicitacao) => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];

        try {
            const novaSolicitacao = {
                ...solicitacao,
                alunoId:aluno.id,
            };

            const alunoAlteracao = {
                ...aluno,
                status:'Enviado Solicitação',
                modalidade:'Estágio',
            };

            const estagioAlteracao = {
                ...estagio,
                TipoDeEstagio: solicitacao.estagioTipo,
                modelo: solicitacao.estagioModelo,
            };

            const response = await Api.post('/entradaSolitacao', novaSolicitacao);
            const response1 = await Api.put(`/aluno/${aluno.id}`,  alunoAlteracao);
            const response2 = await Api.put(`/estagio/${estagio.id}`,  estagioAlteracao);

            console.log('Solicitação enviada com sucesso:', response.data, response1, response2);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };


      // Carrega lista para os botoes meus dados 
        const listaMeusDados = async () => {
        try {
            setMeusDados([
                { id: 1, nomeColuna: 'Meus Dados' },
                { id: 2, nomeColuna: 'Email'},
                
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados do aluno:', error);
        }
    };


    const carregarDadosEstagio = async () => {
        try {
            const { data } = await Api.get('/estagio');
            const estagio = data[0];
            setTabelaEstagio([
                { id: 1, nomeColuna:'Status', dadoColuna: estagio.status },
                { id: 2, nomeColuna:'Tipo de estágio',  dadoColuna:estagio.TipoDeEstagio},
                { id: 3, nomeColuna:'Modelo',  dadoColuna: estagio.modelo  },
                { id: 4, nomeColuna:'Solicitação',  dadoColuna: estagio.solicitacao  },
                { id: 5, nomeColuna:'Data da Solicitação',  dadoColuna: estagio.dataSolicitacao },
                { id: 6, nomeColuna:'Status do Termo',  dadoColuna: estagio.statusDoTermo  },
                { id: 7, nomeColuna:'Prorrogação de período',  dadoColuna: estagio.prorrogacaoPeriodo },
                { id: 8, nomeColuna:'Transição obrigatorio',  dadoColuna:estagio.transicaoDoObrigatorio },
                { id: 9, nomeColuna:'Rescisão do termo',  dadoColuna: estagio.rescisaoTermo },
                { id: 10, nomeColuna:'Relatório de estágio',  dadoColuna: estagio.relatorioEstagio},
                { id: 11, nomeColuna:'Ficha de avaliação',  dadoColuna: estagio.FichaAvaliacao  },
            ]);
        }catch (error) {
            console.error('Erro ao carregar dados do estagio:', error);
        }
    };

    const cancelarSolicitacaoEstagio = async () => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }
        const aluno = alunoData[0];

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];


        
        try {
            const alunoAlteracao = {
                ...aluno,
                status:'Cancelado Solicitação',
                modalidade:'Não realizado',
            };

            const estagioAlteracao = {
                ...estagio,
                TipoDeEstagio:'Sem definição',
                modelo:'Sem definição',
            };

            const response1 = await Api.put(`/aluno/${aluno.id}`,  alunoAlteracao);
            const response2 = await Api.put(`/estagio/${estagio.id}`,  estagioAlteracao);

            console.log('Solicitação enviada com sucesso:', response1, response2);
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    const carregarDadosEstagioDoTermo = async () => {

        const { data: alunoData } = await Api.get('/aluno'); 
        if (!alunoData || alunoData.length === 0) {
            throw new Error('Nenhum aluno encontrado');
        }

        const { data: estagioData } = await Api.get('/estagio'); 
        if (!estagioData || estagioData.length === 0) {
            throw new Error('Nenhum estágio encontrado');
        }
        const estagio = estagioData[0];

        try {
            //Termo de Compromisso de Estágio não Obrigatório Remunerado
            if(estagio.TipoDeEstagio === "naoObrigatorio" && estagio.modelo === "remunerado") {
                return "Termo de Compromisso de Estágio não Obrigatório Remunerado";
            } else if (estagio.TipoDeEstagio === "obrigatorio" && estagio.modelo === "remunerado") {
                return "Termo de Compromisso de Estágio Obrigatório Remunerado";
            } else if (estagio.TipoDeEstagio === "obrigatorio" && estagio.modelo === "naoRemunerado") {
                return "Termo de Compromisso de Estágio Obrigatório não Remunerado";
            }
            else{
                return "Sem Solicitação";
            }

        }catch (error) {
            console.error('Erro ao carregar dados do estagio:', error);
        }
    };




    
    return (
        <AppContext.Provider
            value={{iconesAluno,
                    iconesEstagio,
                    tabelaEstagio,
                    iconesICientifica,
                    adicionarSolicitacaoEstagio,
                    carregarDadosEstagio,
                    editarSolicitacaoEstagio,
                    cancelarSolicitacaoEstagio,
                    carregarDadosEstagioDoTermo,
                    enviarDadosTermoNOR,
                    adicionarDadosEmpresa,
                    adicionarDadosEstagioAluno,
                    meusDados,
                    listaMeusDados,
                    tabelaEmpresa,
                    carregarTabelaEmpresa,
                    dadoResponsavel,
                    carregarDadosResponsvel,

                    TabelaTotalAlunoEstagio,
                    TebelaSemSolicitacaoEstagio,
                    TebelaComSolicitacaoEstagio,
                    TebelaEstagioCancelado,
                    ListaMenuAcesso,
                    carregarTebelaTotalAlunoEstagio,
                    carregarTebelaSemSolicitacaoEstagio,
                    carregarTebelaComSolicitacaoEstagio,
                    carregarTebelaEstagioCancelado,
                    carregarListaMenuAcesso,

                }}
        >
            {children}
        </AppContext.Provider>
    );
};
