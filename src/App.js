
import './App.css';
import Ficha from './components/FichaIngresoGasto';
import Utiles from './components/Utiles';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Ingreso de Gastos
        </h1>
      </header>
      <div>
        <Ficha />
      </div>
      <div>
        <Utiles />
      </div>
    </div>
    

  );
}

export default App;
