import "./index.scss";
import { Link } from "react-router-dom";
export default function Contato() {
  return (
    <div className="pagina-contato pagina">
      <header className="cabecalho">
        <Link to="/">
          <i className="fa fa-arrow-left voltar">voltar</i>
        </Link>
        <h1>Contato</h1>
      </header>
      <section className="secao">
        <h1>Entre em contato </h1>
        <img id="robolox" src="/assets/images/contato.png" />
      </section>
    </div>
  );
}
