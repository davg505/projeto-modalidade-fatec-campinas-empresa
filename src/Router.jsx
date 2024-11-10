import { Route, Routes } from "react-router-dom";
import { LayoutPadrao } from "./layout/layoutPadrao/LayoutPadrao";
import { Avisos, EProfissional, Error404, ICientifica, Inicial, MeusDados, Tutorial } from './pages';
import { Estagio } from "./pages/estagio/Estagio";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route index element={<Inicial />} /> {/* Rota padrão para '/' */}
                <Route path="dados" element={<MeusDados />} />
                <Route path="avisos" element={<Avisos />} />
                <Route path="tutorial" element={<Tutorial />} />
                <Route path="estagio" element={<Estagio />} />
                <Route path="ic" element={<ICientifica/>} />
                <Route path="ep" element={<EProfissional />} />
            </Route>
            <Route path="*" element={<Error404 />} /> {/* Captura qualquer rota não encontrada */}
        </Routes>
    );
};