import { useState } from 'react';
import { BotaoTrapezioPadrao, MenuRetravel } from '../../componetes';
import style from './Avisos.module.css';

export const Avisos = () => {
    const [isMenuRetravelOpen, setIsMenuRetravelOpen] = useState(false);

        // Função para abrir o MenuRetravel e fechar o MenuRetravelModalidade
        const handleBotaoTrapezioPadraoClick = () => {
            setIsMenuRetravelOpen(prev => !prev); // Alterna a visibilidade
        };
    return (
        <div className={style.Aviso}>

            <BotaoTrapezioPadrao 
                toggleMenu={handleBotaoTrapezioPadraoClick} // Adiciona a lógica de clique
            />  
            {isMenuRetravelOpen && (
                <div>
                    <MenuRetravel />
                </div>
            )}
            <div className={style.Conteudo}>
                {/* Primeiro bloco de avisos */}
                <h1>Avisos Importantes sobre Estágio</h1>
                <p>
                    Prezado(a) Aluno(a), por favor, fique atento às seguintes informações sobre o seu estágio:
                </p>
                <ul>
                    <li>Você deve entregar os relatórios mensais até o dia 10 de cada mês.</li>
                    <li>A carga horária mínima exigida é de 20 horas semanais.</li>
                    <li>O estágio deve ser realizado em uma empresa ou instituição que esteja de acordo com as normas do curso.</li>
                    <li>Em caso de dúvidas, entre em contato com o coordenador de estágios pelo e-mail: estagio@universidade.com.</li>
                    <li>O prazo final para entrega do relatório final de estágio é até o último dia útil do semestre.</li>
                </ul>
                
                {/* Segundo bloco de avisos */}
                <h1>Aviso sobre Entregas de Documentos</h1>
                <p>
                    Além das informações sobre o estágio, fique atento(a) às entregas de documentos importantes:
                </p>
                <ul>
                    <li>Os documentos de aceitação de estágio devem ser entregues na secretaria até 15 dias após o início do estágio.</li>
                    <li>Certifique-se de que todas as assinaturas estão corretas nos documentos.</li>
                    <li>A documentação incompleta pode atrasar a validação do estágio.</li>
                    <li>Qualquer alteração no plano de estágio deve ser comunicada imediatamente.</li>
                </ul>
            </div>
        </div>
    );
};
