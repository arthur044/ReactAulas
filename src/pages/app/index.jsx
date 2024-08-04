import "./index.scss";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="pagina-app pagina">
      <header className="cabecalho">
        <h1> Estudos React ! </h1>
      </header>
      <section className="secao">
        <h1>Titulo</h1>
        {/* <input type="text" placeholder="Digite aqui" />
        <br/> <br/>
        <select>
          <option>item 1</option>
          <option>item 2</option>
        </select> */}
        <br /> <br />
        {/* <button>Clique aqui</button> */}
        <ul>
          <Link to="/contato">
            <li>Ir para contato</li>
          </Link>
          <Link to="/eventos">
            <li>Pagina de eventos</li>
          </Link>
          <Link to="/varEstado">
            <li>Ir para Variavel de Estado</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}
export default App;
