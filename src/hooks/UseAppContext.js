import { useContext } from "react";
import { AppContext } from "../contexts";

export const UseAppContext = () => {

    const contexto =  useContext(AppContext);

    return contexto;

};