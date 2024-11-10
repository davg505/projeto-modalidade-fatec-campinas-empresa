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
                    Prezada Empresa, por favor, fiquem atentos às seguintes informações sobre o estágio dos estudantes:
                </p>
                <ul>
                    <li>A empresa deve orientar o estagiário a entregar os relatórios mensais até o dia 10 de cada mês.</li>
                    <li>A carga horária mínima exigida para o estágio é de 20 horas semanais.</li>
                    <li>O estágio deve ser realizado em conformidade com as normas estabelecidas pelo curso.</li>
                    <li>Em caso de dúvidas, entre em contato com o coordenador de estágios pelo e-mail: estagio@universidade.com.</li>
                    <li>O prazo final para a entrega do relatório final de estágio pelo estagiário é até o último dia útil do semestre.</li>
                </ul>

                {/* Segundo bloco de avisos */}
                <h1>Aviso sobre Entregas de Documentos</h1>
                <p>
                    Além das informações sobre o estágio, é importante que a empresa fique atenta às entregas de documentos necessários:
                </p>
                <ul>
                    <li>Os documentos de aceitação do estágio devem ser entregues na secretaria até 15 dias após o início do estágio.</li>
                    <li>Certifiquem-se de que todas as assinaturas estão corretas nos documentos.</li>
                    <li>A documentação incompleta pode atrasar a validação do estágio.</li>
                    <li>Qualquer alteração no plano de estágio deve ser comunicada imediatamente.</li>
                </ul>
            </div>
        </div>
    );
};
