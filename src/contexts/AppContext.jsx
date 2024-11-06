/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Api } from '../services/Api';

export const AppContext = createContext({});



export const AppContextProvider = (props) => {
    const { children } = props;

    const [tabelaAluno, setTabelaAluno] = useState([]);

    const [tabelaEstagio, setTabelaEstagio] = useState([]);

    const [iconesAluno] = useState([
        { id: 1, sigla: 'E', nome:'Estagio', link: '/estagio', texto:'Estagio' },
        { id: 2, sigla: 'IC', nome:'I.Cientifica', link: '/iniciacaocientifica' , texto:'Iniciação Cientifica' },
        { id: 3, sigla: 'EP', nome:'E.Profissional' , link: '/estagio', texto:'Equivalencia Profissional'},
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

    // Carrega dados do aluno da pagina estagio 
    const carregarTabelaAluno = async () => {
        try {
            const { data } = await Api.get('/aluno'); // Buscando os dados da API
            const aluno = data[0]; // Assumindo que a API retorna um array com um único objeto
            setTabelaAluno([
                { id: 1, nomeColuna: 'Nome do aluno', dadoColuna: aluno.nomeDoAluno },
                { id: 2, nomeColuna: 'Email', dadoColuna: aluno.email },
                { id: 3, nomeColuna: 'Ra', dadoColuna: aluno.ra },
                { id: 4, nomeColuna: 'Curso', dadoColuna: aluno.curso },
                { id: 5, nomeColuna: 'Status', dadoColuna: aluno.status },
                { id: 6, nomeColuna: 'Modalidade', dadoColuna: aluno.modalidade },
            ]);
        } catch (error) {
            console.error('Erro ao carregar dados do aluno:', error);
        }
    };

      // Carrega lista para os botoes meus dados 
        const listaMeusDados = async () => {
        try {
            setTabelaAluno([
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
                    tabelaAluno,
                    tabelaEstagio,
                    iconesICientifica,
                    adicionarSolicitacaoEstagio,
                    carregarTabelaAluno,
                    carregarDadosEstagio,
                    editarSolicitacaoEstagio,
                    cancelarSolicitacaoEstagio,
                    carregarDadosEstagioDoTermo,
                    enviarDadosTermoNOR,
                    adicionarDadosEmpresa,
                    adicionarDadosEstagioAluno,
                    listaMeusDados,

                }}
        >
            {children}
        </AppContext.Provider>
    );
};
