import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router';
import { AppContextProvider } from './contexts';

const App = () => {

  return (
    <AppContextProvider>
    <BrowserRouter  basename="/projeto-modalidade-fatec-campinas-empresa/">
    <Router/>
    </BrowserRouter>
    </AppContextProvider>
  )
}

export { App };

