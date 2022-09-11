import logo from './logo.svg';
import Cronometro from './CRONOMETRO';
import TelaInicial from './TelaInicial';
import Calculadora from './Calculadora';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element = {<TelaInicial/>}/>
        <Route path= '/cronometro' element = {<Cronometro/>}/>
        <Route path= '/calculadora' element = {<Calculadora/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
