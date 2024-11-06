import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../componetes";

export const LayoutPadrao = () => {
    return (
    <>
    <Cabecalho/>
    <Conteudo>  
    <Outlet/>
    </Conteudo>
    <Rodape/>
    </>
    );
};